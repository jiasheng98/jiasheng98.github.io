import MyLayout from '../../components/MyLayout';
import LazyImage from '../../components/LazyImage';
import Contact from '../../components/home/Contact';
import Reveal from '../../components/common/Reveal';
import AppLink from '../../components/common/AppLink';
import type { Locale, Project } from '../../data/projects';
import { featuredProjectSlugs, getProjectsBySlugs } from '../../data/projects';

const PortfolioListPage = () => {
  const locale: Locale = 'en';
  const projects = getProjectsBySlugs(featuredProjectSlugs);

  return (
    <MyLayout title="Portfolio" description="Portfolio">
      <section className="section-spacing relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent blur-3xl" />
        <div className="layout-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-zinc-900 transition-colors duration-300 dark:text-white sm:text-5xl">Selected Portfolio</h1>
            <p className="mt-6 text-lg text-zinc-600 transition-colors duration-300 dark:text-zinc-300">
              A collection of crafted UI/UX journeys built for brands spanning furniture, gaming, lifestyle, and on-demand services.
            </p>
          </div>

          <div className="mt-16 grid gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={`${project.slug}-${locale}`} project={project} locale={locale} index={index} />
            ))}
          </div>
        </div>
      </section>
      <Contact icons />
    </MyLayout>
  );
};

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  index: number;
};

const ProjectCard = ({ project, locale, index }: ProjectCardProps) => {
  const copy = project.copy[locale];
  const href = `/portfolio/${project.slug}`;

  return (
    <Reveal
      delay={150 + index * 100}
      className="group relative overflow-hidden rounded-[2.5rem] border border-zinc-200/80 bg-white/80 p-1 shadow-2xl transition-colors duration-300 dark:border-white/10 dark:bg-black/50"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{
        background: `linear-gradient(135deg, ${project.cardBackgroundColor} 0%, rgba(15,15,15,0.65) 70%)`,
      }} />
      <div className="relative grid gap-10 rounded-[2.5rem] border border-zinc-200/80 bg-white/90 p-8 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-black/60 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200/70 bg-white/80 transition-colors duration-300 dark:border-white/10 dark:bg-white/10">
                <LazyImage src={project.logo} className="h-8 w-8 object-contain" alt={`${project.cardTitle} logo`} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">{copy.role}</p>
                <h2 className="mt-1 text-2xl font-semibold text-zinc-900 transition-colors duration-300 dark:text-white sm:text-3xl">{project.cardTitle}</h2>
              </div>
            </div>
            <span className="rounded-full border border-zinc-200/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-700 transition-colors duration-300 dark:border-white/20 dark:text-zinc-100">
              {copy.date}
            </span>
          </div>
          <p className="text-base leading-relaxed text-zinc-600 transition-colors duration-300 dark:text-zinc-300">{copy.summary}</p>
          {project.gallery.length ? (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {project.gallery.map((image, galleryIndex) => (
                <div
                  key={`${project.slug}-gallery-${galleryIndex}`}
                  className="min-w-[9rem] overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 p-3 transition duration-300 hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <LazyImage
                    src={image}
                    className="h-32 w-full rounded-2xl object-cover"
                    alt={`${project.cardTitle} detail ${galleryIndex + 1}`}
                  />
                </div>
              ))}
            </div>
          ) : null}
          <AppLink
            href={href}
            className="inline-flex items-center justify-center rounded-full border border-zinc-200/70 px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-zinc-900 hover:text-zinc-900 dark:border-white/20 dark:text-white dark:hover:border-white"
          >
            View Case Study
          </AppLink>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-[2.25rem] border border-zinc-200/70 bg-white/70 blur-3xl transition-colors duration-300 dark:border-white/10 dark:bg-white/5" />
          <div className="relative w-full rounded-[2.25rem] border border-zinc-200/80 bg-white/90 p-8 transition-colors duration-300 dark:border-white/10 dark:bg-black/70">
            <LazyImage
              src={project.heroImage}
              className="mx-auto w-full max-w-sm object-contain drop-shadow-[0_40px_80px_rgba(15,23,42,0.45)]"
              alt={`${project.cardTitle} preview`}
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default PortfolioListPage;
