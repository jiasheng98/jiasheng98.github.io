# Translation helpers

This directory contains small utilities that help generate localized copy for the site.

## googletrans_translate.py

The `googletrans_translate.py` script wraps the [`googletrans`](https://pypi.org/project/googletrans/) package so that
strings or JSON data can be translated from the command line.

### Setup

```bash
pip install -r scripts/requirements.txt
```

### Basic usage

Translate a single sentence to Japanese:

```bash
python scripts/googletrans_translate.py --text "Hello, world!" --dest ja
```

Translate every non-empty line in a text file to Malay and save the output as JSON:

```bash
python scripts/googletrans_translate.py --input copy.txt --dest ms --output translations.json --pretty
```

You can also point the script to a JSON document. Keys are preserved in the output so it is easier to map the
translations back to the original structure:

```bash
python scripts/googletrans_translate.py --input data/projects.json --dest ja --output ja-translations.json
```

The JSON export contains the original string, the translation, pronunciation (if available) and the source language
that `googletrans` detected for the text.
