"""Utility helpers for translating site copy with googletrans.

This script provides a small command line interface over the
``googletrans`` package so content authors can quickly translate
existing copy into other languages. It focuses on simple workflows such
as translating loose strings, newline separated files, or structured
JSON documents while preserving a helpful key for each string.
"""
from __future__ import annotations

import argparse
import json
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, List

from googletrans import Translator


@dataclass
class TextItem:
    """Container that records the origin of a string.

    The ``key`` helps make the output easier to map back to the original
    source when translating multiple strings at once.
    """

    key: str
    text: str


def flatten_json(value: object, prefix: str = "") -> List[TextItem]:
    """Extract translatable strings from a JSON-compatible structure.

    Dictionaries and lists are traversed depth-first while building a
    dotted key path (``section.subsection[0]``) that is emitted alongside
    each string.
    """

    items: List[TextItem] = []

    if isinstance(value, dict):
        for key, nested in value.items():
            nested_prefix = f"{prefix}.{key}" if prefix else str(key)
            items.extend(flatten_json(nested, nested_prefix))
    elif isinstance(value, list):
        for index, nested in enumerate(value):
            nested_prefix = f"{prefix}[{index}]" if prefix else f"[{index}]"
            items.extend(flatten_json(nested, nested_prefix))
    else:
        items.append(TextItem(prefix or "root", str(value)))

    return items


def load_items(args: argparse.Namespace) -> List[TextItem]:
    """Collect strings from CLI arguments and optional files."""

    items: List[TextItem] = []

    for idx, text in enumerate(args.text or [], start=1):
        items.append(TextItem(key=f"arg[{idx}]", text=text))

    if args.input:
        input_path = Path(args.input)
        if not input_path.exists():
            raise FileNotFoundError(f"Input file not found: {input_path}")

        raw = input_path.read_text(encoding="utf-8")
        try:
            parsed = json.loads(raw)
        except json.JSONDecodeError:
            lines = [line.strip() for line in raw.splitlines() if line.strip()]
            items.extend(
                TextItem(key=f"{input_path.name}:{index}", text=line)
                for index, line in enumerate(lines, start=1)
            )
        else:
            items.extend(flatten_json(parsed, prefix=input_path.stem))

    if not items:
        raise ValueError("No strings were provided. Use --text or --input.")

    return items


def translate_items(items: Iterable[TextItem], dest: str, src: str | None) -> List[dict]:
    """Translate a sequence of items using googletrans."""

    translator = Translator()
    texts = [item.text for item in items]
    translations = translator.translate(texts, dest=dest, src=src or "auto")

    # googletrans returns a single object when translating one string.
    if not isinstance(translations, list):
        translations = [translations]

    results = []
    for item, translation in zip(items, translations):
        results.append(
            {
                "key": item.key,
                "original": item.text,
                "translated": translation.text,
                "pronunciation": translation.pronunciation,
                "detected_source_language": translation.src,
                "dest": dest,
            }
        )

    return results


def dump_results(results: List[dict], output: Path | None, pretty: bool) -> None:
    """Persist translations either to stdout or to a JSON file."""

    if output:
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(
            json.dumps(results, ensure_ascii=False, indent=2 if pretty else None),
            encoding="utf-8",
        )
        print(f"Saved {len(results)} translations to {output}")
    else:
        for result in results:
            print(f"[{result['key']}]")
            print(f"Original   : {result['original']}")
            print(f"Translated : {result['translated']}")
            if result["pronunciation"]:
                print(f"Pronunciation: {result['pronunciation']}")
            print(f"Detected Language: {result['detected_source_language']}")
            print("-")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--text",
        action="append",
        help="Translate literal text supplied on the command line. Can be repeated.",
    )
    parser.add_argument(
        "--input",
        help=(
            "Optional path to a UTF-8 file. JSON files are traversed recursively "
            "while other formats are treated as newline-separated strings."
        ),
    )
    parser.add_argument("--dest", required=True, help="Destination language code, e.g. 'ja' or 'fr'.")
    parser.add_argument("--src", help="Source language code. Defaults to googletrans auto-detect.")
    parser.add_argument(
        "--output",
        help="Optional path to save the translation results as JSON. Defaults to stdout.",
    )
    parser.add_argument("--pretty", action="store_true", help="Pretty-print JSON output with indentation.")
    return parser


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()

    items = load_items(args)
    results = translate_items(items, dest=args.dest, src=args.src)

    output_path = Path(args.output) if args.output else None
    dump_results(results, output=output_path, pretty=args.pretty)


if __name__ == "__main__":
    main()
