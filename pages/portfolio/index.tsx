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
      {projects.map((project) => (
        <PortfolioSection key={`${project.slug}-${locale}`} project={project} locale={locale} />
      ))}
      <Contact icons />
    </MyLayout>
  );
};

type PortfolioSectionProps = {
  project: Project;
  locale: Locale;
};

const PortfolioSection = ({ project, locale }: PortfolioSectionProps) => {
  const copy = project.copy[locale];
  const href = `/portfolio/${project.slug}`;

  return (
    <section style={{ backgroundColor: project.cardBackgroundColor }} className="portfolio-section">
      <div>
        <Reveal
          delay={200}
          className="portfolio-card"
          style={{ backgroundColor: project.cardBackgroundColor, color: project.cardTextColor }}
        >
          <div className="portfolio-card__body">
            <div>
              <div className="portfolio-card__title-row">
                <Reveal animation="fade-right" delay={400}>
                  <LazyImage src={project.logo} className="portfolio-card__logo" alt={`${project.cardTitle} logo`} />
                </Reveal>
                <p className="portfolio-card__title">{project.cardTitle}</p>
              </div>
              <p className="portfolio-card__subtitle">{copy.summary}</p>
            </div>
            {project.gallery.length ? (
              <div className="portfolio-card__image-container">
                {project.gallery.map((image, index) => (
                  <Reveal
                    key={`${project.slug}-description-${index}`}
                    delay={500 + index * 100}
                    className="portfolio-card__image-wrapper"
                  >
                    <LazyImage
                      src={image}
                      className="portfolio-card__image"
                      alt={`${project.cardTitle} showcase ${index + 1}`}
                    />
                  </Reveal>
                ))}
              </div>
            ) : null}
          </div>
          <div className="portfolio-card__image-container">
            <LazyImage src={project.heroImage} className="portfolio-card__phone" alt={`${project.cardTitle} preview`} />
          </div>
        </Reveal>
        <div className="portfolio-card__footer">
          <AppLink href={href} className="portfolio-card__footer-link">
            {`View ${project.cardTitle}`}
          </AppLink>
        </div>
      </div>
    </section>
  );
};

export default PortfolioListPage;
