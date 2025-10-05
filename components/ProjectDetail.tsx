import AppLink from './common/AppLink';
import LazyImage from './LazyImage';
import type { Locale, Project } from '../data/projects';

const appStoreIcon = '/images/appstore.png';
const playStoreIcon = '/images/playstore.png';

type ProjectDetailProps = {
  project: Project;
  locale: Locale;
};

const ProjectDetail = ({ project, locale }: ProjectDetailProps) => {
  const copy = project.copy[locale];
  const heroBackground = project.heroBackgroundColor ?? project.cardBackgroundColor;
  const websiteLabel = project.links?.website?.label?.[locale] ?? project.links?.website?.label?.en ?? undefined;
  const designLabel = locale === 'jp' ? 'デザイン' : 'Design';
  const developmentLabel = locale === 'jp' ? '開発' : 'Development';
  const roleLabel = locale === 'jp' ? '役割' : 'Role';
  const designShowcaseTitle = locale === 'jp' ? 'デザイン解説' : 'Design Showcase';
  const heroStyle = heroBackground
    ? {
      background: ``,
    }
    : undefined;

  return (
    <article className="flex flex-col">
      <section className="relative isolate overflow-hidden border-b border-zinc-200/70 transition-colors duration-300 dark:border-white/10" style={heroStyle}>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-soft opacity-60 dark:opacity-80" />
        <div className="pointer-events-none absolute -left-1/2 top-1/4 h-[36rem] w-[36rem] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-1/3 bottom-0 h-[28rem] w-[28rem] rounded-full bg-pink-400/20 blur-3xl" />
        <div className="section-spacing layout-container--narrow flex flex-col items-center gap-10 text-center">
          <span className="typography-meta text-zinc-500 transition-colors duration-300 dark:text-zinc-400">{copy.date}</span>
          <h1 className="typography-display text-zinc-900 transition-colors duration-300 dark:text-white">{copy.title}</h1>
          <p className="typography-body max-w-3xl text-zinc-700 transition-colors duration-300 dark:text-zinc-200">{copy.overview}</p>
          <div className="relative w-full max-w-4xl">
            <div className="absolute inset-0 rounded-[3rem] bg-white/70 blur-3xl transition-colors duration-300 dark:bg-white/10" />
            <div className="relative overflow-hidden rounded-[1.2rem] md:rounded-[3rem] border border-zinc-200/70 bg-white/90 p-3 md:p-6 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-black/70">
              <div className="relative aspect-[26/19] w-full overflow-hidden rounded-[1rem] md:rounded-[2rem] bg-zinc-100 transition-colors duration-300 dark:bg-zinc-900">
                {project.heroImage && project.heroImageMobile ? (
                  <>
                    <LazyImage
                      src={project.heroImage}
                      alt={copy.title}
                      className="h-full w-full object-cover drop-shadow-[0_40px_80px_rgba(15,23,42,0.45)] object-top"
                    />
                    <div className="pointer-events-none hidden md:block absolute -right-6 bottom-10 w-32 min-w-[8rem] max-w-[20rem] rotate-0 overflow-hidden rounded-[2.25rem] border border-zinc-200/70 bg-white/95 p-3 shadow-2xl transition-all duration-300 dark:border-black dark:bg-black sm:-right-4 sm:bottom-12 sm:w-36 md:right-5 md:bottom-5 md:w-60">
                      <div className="aspect-[8/18] overflow-hidden rounded-[1.75rem] bg-zinc-100 transition-colors duration-300 dark:bg-zinc-950">
                        <LazyImage
                          src={project.heroImageMobile}
                          alt={`${copy.title} mobile preview`}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center p-6 text-center">
                    <p className="typography-body text-zinc-500 transition-colors duration-300 dark:text-zinc-400">
                      {locale === 'jp' ? 'ここにスクリーンモックアップを配置してください。' : 'Add your screen mockup in this placeholder.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative section-spacing border-b border-zinc-200/70 transition-colors duration-300 dark:border-white/10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent blur-3xl" />
        <div className="layout-container space-y-12">
          <div className="space-y-4 text-center">
            <p className="typography-meta text-zinc-500 transition-colors duration-300 dark:text-zinc-400">{designShowcaseTitle}</p>
            <p className="typography-body mx-auto max-w-3xl text-zinc-700 transition-colors duration-300 dark:text-zinc-200">
              {copy.summary}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200/70 bg-white/90 p-8 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
              <h3 className="typography-subheading text-zinc-900 transition-colors duration-300 dark:text-white">
                {copy.feature1_header}
              </h3>
              <p className="p-0 mt-2 typography-body text-zinc-700 transition-colors duration-300 dark:text-zinc-200">{copy.feature1_description}</p>
              <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-[1rem] bg-zinc-100 transition-colors duration-300 dark:bg-zinc-900">
                <LazyImage
                  src={project.feature1}
                  alt={copy.title}
                  className="h-full w-full object-cover drop-shadow-[0_40px_80px_rgba(15,23,42,0.45)] object-top"
                />
              </div>
            </div>
            <div className="rounded-3xl border border-zinc-200/70 bg-white/90 p-8 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
              <h3 className="typography-subheading text-zinc-900 transition-colors duration-300 dark:text-white">{copy.feature2_header}</h3>
              <p className="p-0 mt-2 typography-body text-zinc-700 transition-colors duration-300 dark:text-zinc-200">{copy.feature2_description}</p>
              <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-[1rem] bg-zinc-100 transition-colors duration-300 dark:bg-zinc-900">
                <LazyImage
                  src={project.feature2}
                  alt={copy.title}
                  className="h-full w-full object-cover drop-shadow-[0_40px_80px_rgba(15,23,42,0.45)] object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative section-spacing border-b border-zinc-200/70 transition-colors duration-300 dark:border-white/10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent blur-3xl" />
        <div className="layout-container--tight">
          <aside className="w-full overflow-hidden space-y-8 rounded-[2.5rem] border border-zinc-200/80 bg-white/90 p-8 shadow-2xl backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-black/60">
            <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-40 dark:opacity-60" />
            <div className="space-y-2">
              <p className="typography-meta text-zinc-500 transition-colors duration-300 dark:text-zinc-400">{roleLabel}</p>
              <p className="typography-subheading text-zinc-900 transition-colors duration-300 dark:text-white">{copy.role}</p>
              <p className="typography-body-sm text-zinc-600 transition-colors duration-300 dark:text-zinc-300">{copy.roleDescription}</p>
            </div>
            <div>
              <p className="typography-meta text-zinc-500 transition-colors duration-300 dark:text-zinc-400">{designLabel}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.designTools}
              </div>
            </div>
            <div>
              <p className="typography-meta text-zinc-500 transition-colors duration-300 dark:text-zinc-400">{developmentLabel}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.developmentTools}
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3 text-zinc-600 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
                {project.links?.website ? (
                  <AppLink
                    href={project.links.website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap text-xl inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200/70 px-6 py-2 typography-button text-zinc-800 transition hover:-translate-y-0.5 hover:border-zinc-900 hover:text-zinc-900 dark:border-white/20 dark:text-white dark:hover:border-white"
                  >
                    <span>
                      {locale === 'jp' ? 'ウェブサイト' : 'Visit Website'}
                      {websiteLabel ? ` (${websiteLabel})` : ''}
                    </span>
                  </AppLink>
                ) : null}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
};

export default ProjectDetail;
