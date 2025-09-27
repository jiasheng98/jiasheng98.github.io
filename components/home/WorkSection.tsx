import { useMemo } from 'react';
import AppLink from '../common/AppLink';
import Reveal from '../common/Reveal';
import LazyImage from '../LazyImage';
import type { Locale, Project } from '../../data/projects';
import { featuredProjectSlugs, getProjectsBySlugs } from '../../data/projects';

type WorkSectionProps = {
  jp?: boolean;
};

const WorkSection = ({ jp = false }: WorkSectionProps) => {
  const locale: Locale = jp ? 'jp' : 'en';
  const projects = useMemo(() => getProjectsBySlugs(featuredProjectSlugs), []);
  const title = jp ? 'シグネチャープロジェクト' : 'Signature Projects';
  const description = jp
    ? 'ブランドの世界観を捉えた体験をデザインし、ユーザーインターフェースから実装までを一貫して担当しています。'
    : 'Designing immersive brand moments and delivering them through thoughtful UI and code craftsmanship.';

  return (
    <section id="work" className="section-spacing relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="layout-container">
        <Reveal animation="fade-right" className="max-w-3xl">
          <span className="typography-eyebrow text-zinc-500 transition-colors duration-300 dark:text-zinc-400">{jp ? '実績' : 'Selected Work'}</span>
          <h2 className="mt-4 typography-heading text-zinc-900 transition-colors duration-300 dark:text-white">{title}</h2>
          <p className="mt-4 typography-body text-zinc-600 transition-colors duration-300 dark:text-zinc-300">{description}</p>
        </Reveal>

        <div className="mt-16 grid gap-12">
          {projects.map((project, projectIndex) => (
            <ProjectHighlight key={`${project.slug}-${locale}`} project={project} locale={locale} index={projectIndex} />
          ))}
        </div>
      </div>
    </section>
  );
};

type ProjectHighlightProps = {
  project: Project;
  locale: Locale;
  index: number;
};

const ProjectHighlight = ({ project, locale, index }: ProjectHighlightProps) => {
  const copy = project.copy[locale];
  const href = locale === 'jp' ? `/jp/portfolio/${project.slug}` : `/portfolio/${project.slug}`;
  const [gradientStart, gradientEnd] = project.cardHoverGradient ?? [
    project.cardBackgroundColor,
    'rgba(15,15,15,0.65)',
  ];

  const gradientStyle = {
    background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
  };

  return (
    <Reveal
      delay={150 + index * 100}
      className="group relative overflow-hidden rounded-[2.75rem] border border-zinc-200/80 bg-white/80 p-1 shadow-2xl transition-colors duration-300 dark:border-white/10 dark:bg-black/50"
    >
      <div className="absolute inset-0 rounded-[2.75rem] opacity-0 transition duration-500 group-hover:opacity-100" style={gradientStyle} />
      <div className="flex flex-col relative gap-10 rounded-[2.75rem] border border-zinc-200/80 bg-white/90 p-10 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-black/60">
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div>
                  {/* <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">{copy.role}</p> */}
                  <h3 className="mt-1 typography-subheading text-zinc-900 transition-colors duration-300 dark:text-white">{project.cardTitle}</h3>
                </div>
              </div>
              {/* <span className="rounded-full border border-zinc-200/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-700 transition-colors duration-300 dark:border-white/20 dark:text-zinc-100">
                {copy.date}
              </span> */}
            </div>
            <p className="typography-body text-zinc-600 transition-colors duration-300 dark:text-zinc-300">{copy.summary}</p>
            {/* {project.gallery.length ? (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {project.gallery.map((image, imageIndex) => (
                  <div
                    key={`${project.slug}-detail-${imageIndex}`}
                    className="min-w-[9rem] flex-1 overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 p-3 transition duration-300 hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                  >
                    <LazyImage
                      src={image}
                      className="h-32 w-full rounded-2xl object-cover"
                      alt={`${project.cardTitle} detail ${imageIndex + 1}`}
                    />
                  </div>
                ))}
              </div>
            ) : null} */}
          </div>
        </div>
        {/* <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-[2.5rem] border border-zinc-200/70 bg-white/70 blur-3xl transition-colors duration-300 dark:border-white/10 dark:bg-white/5" />
          <div className="p-4 flex h-40 w-60 items-center justify-center rounded-2xl border border-zinc-200/70 bg-white/80 transition-colors duration-300 dark:border-white/10 dark:bg-white/10">
            <LazyImage src={project.logo} className="object-contain" alt={`${project.cardTitle} logo`} />
          </div>
        </div> */}
        <div className="flex flex-col gap-3 text-zinc-600 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
          {/* <span>{copy.roleDescription}</span> */}
          <AppLink
            href={href}
            className="whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200/70 px-6 py-2 typography-button text-zinc-800 transition hover:-translate-y-0.5 hover:border-zinc-900 hover:text-zinc-900 dark:border-white/20 dark:text-white dark:hover:border-white"
          >
            {copy.cta}
          </AppLink>
        </div>
      </div>
    </Reveal>
  );
};

export default WorkSection;
