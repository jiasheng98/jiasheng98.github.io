import styles from './styles/ProjectDetail.module.css';
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

  return (
    <>
      <div className={styles['landing-section-container']} style={{ backgroundColor: heroBackground }}>
        <img src={project.heroImage} className={styles['image-container']} alt={copy.title} />
      </div>
      <div className={styles['description-section-container']}>
        <div className={styles['description-wrapper']}>
          <h1 className={styles['title-text']}>{copy.title}</h1>
          <div className={styles['description-subtitle']}>
            <div>
              <p className={styles['role-title']}>{locale === 'jp' ? '概要' : 'Overview'}</p>
              {copy.overview.map((paragraph, index) => (
                <p key={`${project.slug}-overview-${index}`}>{paragraph}</p>
              ))}
              {project.designTools ? (
                <p>
                  <span className={styles['role-title']}>{locale === 'jp' ? 'デザイン:' : 'Design:'}</span> {project.designTools}
                </p>
              ) : null}
              {project.developmentTools ? (
                <p>
                  <span className={styles['role-title']}>
                    {locale === 'jp' ? '開発:' : 'Development:'}
                  </span>{' '}
                  {project.developmentTools}
                </p>
              ) : null}
            </div>
            <div>
              <p className={styles['role-title']}>{locale === 'jp' ? '役割' : 'Role'}</p>
              <p className={styles['role-title']}>{copy.role}</p>
              <p>{copy.roleDescription}</p>
              <p>{copy.date}</p>
            </div>
          </div>
          <hr className={styles['hr--medium']} />
          <div className={styles['button-container-app']}>
            {project.links?.appStore ? (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['prototype-button']}
              >
                <div className={styles['app-button-container']}>
                  <img className={styles['app-button']} src={appStoreIcon} alt="App Store" />
                </div>
              </a>
            ) : null}
            {project.links?.playStore ? (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['prototype-button']}
              >
                <div className={styles['app-button-container']}>
                  <img className={styles['app-button']} src={playStoreIcon} alt="Google Play" />
                </div>
              </a>
            ) : null}
            {project.links?.website ? (
              <a
                className={styles['website-button']}
                href={project.links.website.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <p>
                    {locale === 'jp' ? 'ウェブサイトを見る' : 'See Website'}
                    {websiteLabel ? ` (${websiteLabel})` : ''}
                  </p>
                </div>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
