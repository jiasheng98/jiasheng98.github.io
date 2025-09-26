import { useEffect } from 'react';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import MyLayout from '../../components/MyLayout';
import LazyImage from '../../components/LazyImage';
import Contact from '../../components/home/Contact';
import styles from '../styles/PortfolioList.module.css';
import snailer from '../../../public/gif/Snailer.gif';
import urcheckin from '../../../public/images/urcheckin-logo.png';
import ttracing from '../../../public/images/ttracing-logo.png';
import strived from '../../../public/images/strived-logo.png';
import steelcase from '../../../public/images/steelcase-logo.png';
import snailerfood from '../../../public/images/SnailerFood.png';
import snailergrocery from '../../../public/images/SnailerGrocery.png';
import snailercar from '../../../public/images/SnailerCar.png';
import urcheckinwalau from '../../../public/images/UrcheckinWalao.png';
import urcheckintower from '../../../public/images/UrcheckinTwinTower.png';
import urcheckinsign from '../../../public/images/UrcheckinRoadSign.png';
import snaileruihome from '../../../public/images/snailer_ui_home.png';
import urcheckinuihome from '../../../public/images/urcheckin_ui_home.png';
import ttracinguihome from '../../../public/images/ttracing_ui_home.png';
import striveduihome from '../../../public/images/strived_ui_home.png';
import steelcaseuihome from '../../../public/images/steelcase_ui_home.png';

type PortfolioPreview = {
  logo: string | StaticImageData;
  title: string;
  subtitle: string;
  backgroundColor: string;
  fontColor: string;
  hasDescriptionImages?: boolean;
  phone: string | StaticImageData;
  image1?: string | StaticImageData;
  image2?: string | StaticImageData;
  image3?: string | StaticImageData;
  href: string;
};

const portfolioItems: PortfolioPreview[] = [
  {
    logo: snailer,
    title: 'Snailer',
    subtitle:
      'Took part in UI design and development for Snailer - a white-labeled food/grocery delivery and vehicle hiring app based in Johor, Malaysia. The app and website is designed using playful, clean and modern approach.',
    backgroundColor: '#468d65',
    fontColor: '#FFFFFF',
    hasDescriptionImages: true,
    phone: snaileruihome,
    image1: snailerfood,
    image2: snailergrocery,
    image3: snailercar,
    href: '/portfolio/Snailer',
  },
  {
    logo: urcheckin,
    title: 'Urcheckin',
    subtitle:
      'Took part in UI development for Urcheckin - A lodging app which offers arrangement for vacation rental, primarily homestays, or tourism experiences.',
    backgroundColor: '#E9493C',
    fontColor: '#FFFFFF',
    hasDescriptionImages: true,
    phone: urcheckinuihome,
    image1: urcheckinsign,
    image2: urcheckinwalau,
    image3: urcheckintower,
    href: '/portfolio/Urcheckin',
  },
  {
    logo: ttracing,
    title: 'TTRacing',
    subtitle:
      'Constantly take part and improving in the entire Shopify UI/UX design and development for TTRacing - a gaming chair company that strives to give everyone the best comfort experience for when they’re working or playing for long hours.',
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    phone: ttracinguihome,
    href: '/portfolio/ttracing',
  },
  {
    logo: strived,
    title: 'Strived',
    subtitle:
      'Took part in the entire Shopify UI/UX design and development for Strived - a fully customised gift shop that focuses on providing unique and high-quality products.',
    backgroundColor: '#000000',
    fontColor: '#FFFFFF',
    phone: striveduihome,
    href: '/portfolio/strived',
  },
  {
    logo: steelcase,
    title: 'Steelcase',
    subtitle:
      'Took part in the entire Shopify UI/UX design and development for Steelcase - an international manufacturer of furniture, casegoods, seating, and storage and partitioning systems for offices, hospitals, classrooms, and residential interiors.',
    backgroundColor: '#272725',
    fontColor: '#FFFFFF',
    phone: steelcaseuihome,
    href: '/portfolio/steelcase',
  },
];

const PortfolioListPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MyLayout title="Portfolio" description="Portfolio">
      <Portfolio item={portfolioItems[4]} />
      <Portfolio item={portfolioItems[2]} />
      <Portfolio item={portfolioItems[3]} />
      <Portfolio item={portfolioItems[0]} />
      <Portfolio item={portfolioItems[1]} />
      <Contact icons />
    </MyLayout>
  );
};

type PortfolioProps = {
  item: PortfolioPreview;
};

const Portfolio = ({ item }: PortfolioProps) => {
  return (
    <section style={{ backgroundColor: item.backgroundColor }} className={styles['work-section']}>
      <div>
        <div
          className={styles['work-card-container']}
          style={{ backgroundColor: item.backgroundColor, color: item.fontColor }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className={styles['work-card-body']}>
            <div>
              <div className={styles['work-title-row']}>
                <div data-aos="fade-right" data-aos-delay="700">
                  <LazyImage src={item.logo} className={styles['work-gif-logo']} alt={`${item.title} logo`} />
                </div>
                <p className={styles['work-card-title']}>{item.title}</p>
              </div>
              <p className={styles['work-card-subtitle']}>{item.subtitle}</p>
            </div>
            {item.hasDescriptionImages ? (
              <div className={styles['work-card-image-container']}>
                {[item.image1, item.image2, item.image3]
                  .filter((image): image is string | StaticImageData => Boolean(image))
                  .map((image, index) => (
                    <div
                      key={`${item.title}-description-${index}`}
                      className={styles['work-card-image-wrapper']}
                      data-aos="fade-up"
                      data-aos-delay="700"
                    >
                      <LazyImage
                        src={image}
                        className={styles['work-card-image-1']}
                        alt={`${item.title} showcase ${index + 1}`}
                      />
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
          <div className={styles['work-card-image-container']}>
            <LazyImage src={item.phone} className={styles['work-card-phone']} alt={`${item.title} preview`} />
          </div>
        </div>
        <div className={styles['work-card-footer']}>
          <Link href={item.href} className={styles['work-card-footer-link']}>
            {`View ${item.title}`}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioListPage;
