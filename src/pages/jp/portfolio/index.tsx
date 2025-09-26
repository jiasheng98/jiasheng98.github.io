import MyLayout from '../../../components/MyLayout';
import LazyImage from '../../../components/LazyImage';
import Contact from '../../../components/home/Contact';
import Reveal from '../../../components/common/Reveal';
import AppLink from '../../../components/common/AppLink';
import styles from '../../styles/PortfolioList.module.css';
import type { Locale, Project } from '../../../data/projects';
import { featuredProjectSlugs, getProjectsBySlugs } from '../../../data/projects';

const PortfolioListPage = () => {
  const locale: Locale = 'jp';
  const projects = getProjectsBySlugs(featuredProjectSlugs);

  return (
    <MyLayout title="Portfolio" description="Portfolio" jp>
      {projects.map((project) => (
        <PortfolioSection key={`${project.slug}-${locale}`} project={project} locale={locale} />
      ))}
      <Contact jp icons />
    </MyLayout>
  );
};

type PortfolioSectionProps = {
  project: Project;
  locale: Locale;
};

const PortfolioSection = ({ project, locale }: PortfolioSectionProps) => {
  const copy = project.copy[locale];
  const href = `/jp/portfolio/${project.slug}`;

  return (
    <section style={{ backgroundColor: project.cardBackgroundColor }} className={styles['work-section']}>
      <div>
        <Reveal
          delay={200}
          className={styles['work-card-container']}
          style={{ backgroundColor: project.cardBackgroundColor, color: project.cardTextColor }}
        >
          <div className={styles['work-card-body']}>
            <div>
              <div className={styles['work-title-row']}>
                <Reveal animation="fade-right" delay={400}>
                  <LazyImage src={project.logo} className={styles['work-gif-logo']} alt={`${project.cardTitle} logo`} />
                </Reveal>
                <p className={styles['work-card-title']}>{project.cardTitle}</p>
              </div>
              <p className={styles['work-card-subtitle']}>{copy.summary}</p>
            </div>
            {project.gallery.length ? (
              <div className={styles['work-card-image-container']}>
                {project.gallery.map((image, index) => (
                  <Reveal
                    key={`${project.slug}-description-${index}`}
                    delay={500 + index * 100}
                    className={styles['work-card-image-wrapper']}
                  >
                    <LazyImage
                      src={image}
                      className={styles['work-card-image-1']}
                      alt={`${project.cardTitle} showcase ${index + 1}`}
                    />
                  </Reveal>
                ))}
              </div>
            ) : null}
          </div>
          <div className={styles['work-card-image-container']}>
            <LazyImage src={project.heroImage} className={styles['work-card-phone']} alt={`${project.cardTitle} preview`} />
          </div>
        </Reveal>
        <div className={styles['work-card-footer']}>
          <AppLink href={href} className={styles['work-card-footer-link']}>
            {`${project.cardTitle} を詳しく見る`}
          </AppLink>
        </div>
      </div>
    </section>
  );
};

export default PortfolioListPage;
