import {useEffect} from 'react';
import MyLayout from '../../components/MyLayout';
import styles from '../styles/PortfolioList.module.css';
import LazyImage from '../../components/lazy-image';
import Link from 'next/link';
import AOS from 'aos';
import Contact from '../../components/home/Contact';

// work logo
import snailer from '../../../public/gif/Snailer.gif';
import urcheckin from '../../../public/images/urcheckin-logo.png';
import ttracing from '../../../public/images/ttracing-logo.png';
import strived from '../../../public/images/strived-logo.png';

// work images
import snailerfood from '../../../public/images/SnailerFood.png';
import snailergrocery from '../../../public/images/SnailerGrocery.png';
import snailercar from '../../../public/images/SnailerCar.png';
import urcheckinwalau from '../../../public/images/UrcheckinWalao.png';
import urcheckintower from '../../../public/images/UrcheckinTwinTower.png';
import urcheckinsign from '../../../public/images/UrcheckinRoadSign.png';
import phone from '../../../public/images/iphonexmock.png';
import snaileruihome from '../../../public/images/snailer_ui_home.png';
import urcheckinuihome from '../../../public/images/urcheckin_ui_home.png';
import ttracinguihome from '../../../public/images/ttracing_ui_home.png';
import striveduihome from '../../../public/images/strived_ui_home.png';

const PortfolioList = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const PortfolioList = [
    {
      logo: snailer,
      title: 'Snailer',
      subtitle:
        'Took part in UI design and development for Snailer - a white-labeled food/grocery delivery and vehicle hiring app based in Johor, Malaysia. The app and website is designed using playful, clean and modern approach.',
      backgroundColor: '#468d65',
      fontColor: '#FFFFFF',
      description_image: true,
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
      description_image: true,
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
  ];

  return (
    <MyLayout title="Portfolio" description="Portfolio">
      <Portfolio item={PortfolioList[0]} />
      <Portfolio item={PortfolioList[1]} />
      <Portfolio item={PortfolioList[2]} />
      <Portfolio item={PortfolioList[3]} />
      <Contact />
    </MyLayout>
  );
};

const Portfolio = ({item}) => {
  return (
    <section
      style={{backgroundColor: item.backgroundColor}}
      className={styles['work-section']}>
      <div>
        <div
          className={styles['work-card-container']}
          style={{backgroundColor: item.backgroundColor, color: item.fontColor}}
          data-aos="fade-up"
          data-aos-delay="200">
          <div className={styles['work-card-body']}>
            <div>
              <div className={styles['work-title-row']}>
                <div data-aos="fade-right" data-aos-delay="700">
                  <LazyImage
                    src={item.logo}
                    className={styles['work-gif-logo']}
                  />
                </div>
                <p className={styles['work-card-title']}>{item.title}</p>
              </div>
              <p className={styles['work-card-subtitle']}>{item.subtitle}</p>
            </div>
            {item.description_image === true ?
            <div className={styles['work-card-image-container']}>
              <div
                className={styles['work-card-image-wrapper']}
                data-aos="fade-up"
                data-aos-delay="700">
                <LazyImage
                  src={item.image1}
                  className={styles['work-card-image-1']}
                />
              </div>
              <div
                className={styles['work-card-image-wrapper']}
                data-aos="fade-up"
                data-aos-delay="700">
                <LazyImage
                  src={item.image2}
                  className={styles['work-card-image-1']}
                />
              </div>
              <div
                className={styles['work-card-image-wrapper']}
                data-aos="fade-up"
                data-aos-delay="700">
                <LazyImage
                  src={item.image3}
                  className={styles['work-card-image-1']}
                />
              </div>
            </div>
            : null}
            <Link href={item.href}>
              <button className={styles['work-button']}>
                <p
                  className={styles['work-button-text']}
                  style={{color: item.backgroundColor, backgroundColor: item.fontColor}}>
                  Check it out
                </p>
              </button>
            </Link>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="700"
            className={styles['work-card-phone']}>
            <LazyImage
              src={item.phone}
              className={styles['work-card-phone-image']}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioList;
