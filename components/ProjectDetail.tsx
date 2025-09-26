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

  const overviewTitle = locale === 'jp' ? '概要' : 'Overview';
  const designLabel = locale === 'jp' ? 'デザイン' : 'Design';
  const developmentLabel = locale === 'jp' ? '開発' : 'Development';
  const roleLabel = locale === 'jp' ? '役割' : 'Role';
  const linksLabel = locale === 'jp' ? '関連リンク' : 'Project Links';

  const heroStyle = {
    background: `radial-gradient(120% 120% at 50% 0%, ${heroBackground} 0%, rgba(8,8,8,0.85) 65%)`,
  };

  return (
    <article className="flex flex-col">
      <section className="relative isolate overflow-hidden border-b border-white/10" style={heroStyle}>
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-24 text-center lg:px-12">
          <span className="text-xs uppercase tracking-[0.4em] text-zinc-400">{copy.date}</span>
          <h1 className="text-3xl font-semibold text-white sm:text-5xl">{copy.title}</h1>
          <p className="max-w-3xl text-base text-zinc-200 sm:text-lg">{copy.summary}</p>
          <div className="relative w-full max-w-3xl">
            <div className="absolute inset-0 rounded-[3rem] bg-white/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-black/70 p-12 backdrop-blur-xl">
              <LazyImage
                src={project.heroImage}
                alt={copy.title}
                className="mx-auto w-full max-w-md object-contain drop-shadow-[0_40px_80px_rgba(15,23,42,0.45)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-24 lg:flex-row lg:px-12">
        <div className="flex-1 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">{overviewTitle}</p>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-300">
              {copy.overview.map((paragraph, index) => (
                <p key={`${project.slug}-overview-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 text-sm text-zinc-400 sm:grid-cols-2">
            {project.designTools ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">{designLabel}</p>
                <p className="mt-2 text-sm text-zinc-200">{project.designTools}</p>
              </div>
            ) : null}
            {project.developmentTools ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">{developmentLabel}</p>
                <p className="mt-2 text-sm text-zinc-200">{project.developmentTools}</p>
              </div>
            ) : null}
          </div>

          {project.gallery.length ? (
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">{locale === 'jp' ? 'ビジュアル' : 'Gallery'}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <div
                    key={`${project.slug}-gallery-${index}`}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4"
                  >
                    <LazyImage src={image} alt={`${copy.title} detail ${index + 1}`} className="w-full rounded-2xl object-cover" />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <aside className="w-full max-w-xl space-y-8 rounded-[2.5rem] border border-white/10 bg-black/60 p-8 shadow-2xl backdrop-blur-xl">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">{roleLabel}</p>
            <p className="text-lg font-semibold text-white">{copy.role}</p>
            <p className="text-sm leading-relaxed text-zinc-300">{copy.roleDescription}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">{linksLabel}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.links?.appStore ? (
                <AppLink
                  href={project.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
                >
                  <img src={appStoreIcon} alt="App Store" className="h-5 w-auto" />
                  App Store
                </AppLink>
              ) : null}
              {project.links?.playStore ? (
                <AppLink
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
                >
                  <img src={playStoreIcon} alt="Google Play" className="h-5 w-auto" />
                  Google Play
                </AppLink>
              ) : null}
              {project.links?.website ? (
                <AppLink
                  href={project.links.website.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
                >
                  <span>
                    {locale === 'jp' ? 'ウェブサイト' : 'Visit Website'}
                    {websiteLabel ? ` (${websiteLabel})` : ''}
                  </span>
                </AppLink>
              ) : null}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">
            <p>{copy.date}</p>
          </div>
        </aside>
      </section>
    </article>
  );
};

export default ProjectDetail;
