import {useState} from 'react';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import LazyImage from '../lazy-image';

import styles from '../styles/WorkSection.module.css';

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

const WorkSection = ({jp}) => {
  const PortfolioList = [
    {
      logo: snailer,
      title: 'Snailer',
      subtitle: jp ? 'マレーシアのジョホール州に拠点を置くホワイトラベルの食品/食料品配達および車両レンタルアプリである Snailer の UI デザインと開発に参加しました。遊び心のある、クリーンでモダンなアプローチのアプリ・ウェブサイトのデザインです。' :
        'Took part in UI design and development for Snailer - a white-labeled food/grocery delivery and vehicle hiring app based in Johor, Malaysia. The app and website is designed using playful, clean and modern approach.',
      backgroundColor: '#468d65',
      fontColor: '#FFFFFF',
      description_image: true,
      phone: snaileruihome,
      image1: snailerfood,
      image2: snailergrocery,
      image3: snailercar,
      href: jp ? 'jp/portfolio/Snailer': '/portfolio/Snailer' ,
    },
    {
      logo: urcheckin,
      title: 'Urcheckin',
      subtitle: jp ? 'ホームステイを中心とした民泊や観光体験の手配を行う宿泊アプリ「Urcheckin」のUI開発に携わりました。' :
        'Took part in UI development for Urcheckin - A lodging app which offers arrangement for vacation rental, primarily homestays, or tourism experiences.',
      backgroundColor: '#E9493C',
      fontColor: '#FFFFFF',
      description_image: true,
      phone: urcheckinuihome,
      image1: urcheckinsign,
      image2: urcheckinwalau,
      image3: urcheckintower,
      href: jp ? 'jp/portfolio/Urcheckin' : '/portfolio/Urcheckin',
    },
    {
      logo: ttracing,
      title: 'TTRacing',
      subtitle: jp ? '長時間の仕事やゲームをする際にすべての人に最高の快適さを提供することに努めている「TTRAcing」ゲーミングチェアの会社 の Shopify UI/UX のデザインと開発全体に継続的に参加し、改善を行っていました。' :
        'Constantly take part and improving in the entire Shopify UI/UX design and development for TTRacing - a gaming chair company that strives to give everyone the best comfort experience for when they’re working or playing for long hours.',
      backgroundColor: '#FFFFFF',
      fontColor: '#000000',
      phone: ttracinguihome,
      href: jp ? 'jp/portfolio/ttracing' : '/portfolio/ttracing',
    },
    {
      logo: strived,
      title: 'Strived',
      subtitle: jp ? 'ユニークで高品質な製品の提供に重点を置いた完全にカスタマイズされたギフト ショップである Strived の Shopify UI/UX のデザインと開発全体に参加しました。' :
        'Took part in the entire Shopify UI/UX design and development for Strived - a fully customised gift shop that focuses on providing unique and high-quality products.',
      backgroundColor: '#000000',
      fontColor: '#FFFFFF',
      phone: striveduihome,
      href: jp ? 'jp/portfolio/strived' : '/portfolio/strived',
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className={styles['work-container']} id="work">
      <div className={styles['work-wrap']}>
        <div>
          <h1 className={styles['my-work-header']}>{jp ? '制作事例': 'Check Out My Work!'}</h1>
        </div>
        <div className={styles['carousel-container']}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={10000}>
            <Carousel.Item>
              <CarouselCard item={PortfolioList[2]}/>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselCard item={PortfolioList[3]}/>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselCard item={PortfolioList[0]}/>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselCard item={PortfolioList[1]}/>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const CarouselCard = ({item,jp}) => {
  return (
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
                {jp ? '詳しくはこちら' : 'Check it Out'}
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
  );
};

export default WorkSection;
