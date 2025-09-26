import type { StaticImageData } from 'next/image';
import styles from './styles/ProjectDetail.module.css';
import appstore from '../../public/images/appstore.png';
import playstore from '../../public/images/playstore.png';

type ProjectResource = {
  label: string;
  href: string;
};

type ProjectItem = {
  title: string;
  projectdescription: string;
  projectdescription1?: string;
  backgroundColor: string;
  landingimage: string | StaticImageData;
  role: string;
  roledescription: string;
  projectdate: string;
  prototype?: boolean;
  appstore?: boolean;
  playstore?: boolean;
  appstorelink?: string;
  playstorelink?: string;
  designsoftware?: string;
  developmentsoftware?: string;
  website?: boolean;
  websitelink?: string;
  websitelabel?: string;
};

type ProjectDetailProps = {
  item: ProjectItem;
  data?: ProjectResource[];
  jp?: boolean;
};

const resolveAsset = (asset: string | StaticImageData | undefined) => {
  if (!asset) {
    return undefined;
  }

  return typeof asset === 'string' ? asset : asset.src;
};

const ProjectDetail = ({ item, data = [], jp = false }: ProjectDetailProps) => {
  return (
    <>
      <LandingSection item={item} />
      <DescriptionSection item={item} data={data} jp={jp} />
    </>
  );
};

type LandingSectionProps = {
  item: ProjectItem;
};

const LandingSection = ({ item }: LandingSectionProps) => {
  return (
    <div className={styles['landing-section-container']} style={{ backgroundColor: item.backgroundColor }}>
      <img src={resolveAsset(item.landingimage)} className={styles['image-container']} alt={item.title} />
    </div>
  );
};

type DescriptionSectionProps = {
  item: ProjectItem;
  data: ProjectResource[];
  jp: boolean;
};

const DescriptionSection = ({ item, data, jp }: DescriptionSectionProps) => {
  return (
    <div className={styles['description-section-container']}>
      <div className={styles['description-wrapper']}>
        <h1 className={styles['title-text']}>{item.title}</h1>
        <div className={styles['description-subtitle']}>
          <div>
            <p className={styles['role-title']}>{jp ? '概要' : 'Overview'}</p>
            <p>{item.projectdescription}</p>
            {item.projectdescription1 ? <p>{item.projectdescription1}</p> : null}
            {item.designsoftware ? (
              <p>
                <span className={styles['role-title']}>{jp ? 'デザイン:' : 'Design:'}</span> {item.designsoftware}
              </p>
            ) : null}
            {item.developmentsoftware ? (
              <p>
                <span className={styles['role-title']}>{jp ? '開発:' : 'Development:'}</span> {item.developmentsoftware}
              </p>
            ) : null}
          </div>
          <div>
            <p className={styles['role-title']}>{jp ? '役割' : 'Role'}</p>
            <p className={styles['role-title']}>{item.role}</p>
            <p>{item.roledescription}</p>
            <p>{item.projectdate}</p>
          </div>
        </div>
        <hr className={styles['hr--medium']} />
        {item.prototype ? (
          <div className={styles['button-container']}>
            {data.map((prototype) => (
              <a
                key={prototype.label}
                style={{ backgroundColor: item.backgroundColor }}
                className={styles['prototype-button']}
                target="_blank"
                rel="noopener noreferrer"
                href={prototype.href}
              >
                <div>
                  <p>{jp ? 'プロトタイプを見る' : 'See Prototype'} ({prototype.label})</p>
                </div>
              </a>
            ))}
          </div>
        ) : null}
        <div className={styles['button-container-app']}>
          {item.appstore && item.appstorelink ? (
            <a
              href={item.appstorelink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['prototype-button']}
            >
              <div className={styles['app-button-container']}>
                <img className={styles['app-button']} src={resolveAsset(appstore)} alt="App Store" />
              </div>
            </a>
          ) : null}
          {item.playstore && item.playstorelink ? (
            <a
              href={item.playstorelink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['prototype-button']}
            >
              <div className={styles['app-button-container']}>
                <img className={styles['app-button']} src={resolveAsset(playstore)} alt="Google Play" />
              </div>
            </a>
          ) : null}
          {item.website && item.websitelink ? (
            <a className={styles['website-button']} href={item.websitelink} target="_blank" rel="noopener noreferrer">
              <div>
                <p>
                  {jp ? 'ウェブサイトを見る' : 'See Website'}
                  {item.websitelabel ? ` (${item.websitelabel})` : ''}
                </p>
              </div>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
export type { ProjectItem };
