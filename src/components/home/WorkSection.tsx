import { useState } from 'react';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import LazyImage from '../LazyImage';
import styles from '../styles/WorkSection.module.css';
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

type WorkItem = {
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

type WorkSectionProps = {
  jp?: boolean;
};

const WorkSection = ({ jp = false }: WorkSectionProps) => {
  const workItems: WorkItem[] = [
    {
      logo: snailer,
      title: 'Snailer',
      subtitle: jp
        ? 'マレーシアのジョホール州に拠点を置くホワイトラベルの食品/食料品配達および車両レンタルアプリである Snailerの UI デザインと開発に参加しました。遊び心のある、クリーンでモダンなアプローチのアプリ・ウェブサイトのデザインです。'
        : 'Took part in UI design and development for Snailer - a white-labeled food/grocery delivery and vehicle hiring app based in Johor, Malaysia. The app and website is designed using playful, clean and modern approach.',
      backgroundColor: '#468d65',
      fontColor: '#FFFFFF',
      hasDescriptionImages: true,
      phone: snaileruihome,
      image1: snailerfood,
      image2: snailergrocery,
      image3: snailercar,
      href: jp ? '/jp/portfolio/Snailer' : '/portfolio/Snailer',
    },
    {
      logo: urcheckin,
      title: 'Urcheckin',
      subtitle: jp
        ? 'ホームステイを中心とした民泊や観光体験の手配を行う宿泊アプリ「Urcheckin」のUI開発に携わりました。'
        : 'Took part in UI development for Urcheckin - A lodging app which offers arrangement for vacation rental, primarily homestays, or tourism experiences.',
      backgroundColor: '#E9493C',
      fontColor: '#FFFFFF',
      hasDescriptionImages: true,
      phone: urcheckinuihome,
      image1: urcheckinsign,
      image2: urcheckinwalau,
      image3: urcheckintower,
      href: jp ? '/jp/portfolio/Urcheckin' : '/portfolio/Urcheckin',
    },
    {
      logo: ttracing,
      title: 'TTRacing',
      subtitle: jp
        ? '長時間の仕事やゲームをする際にすべての人に最高の快適さを提供することに努めている「TTRacing」ゲーミングチェア会社の Shopify UI/UX のデザインと開発全体に継続的に参加し、改善を行っていました。'
        : 'Constantly take part and improving in the entire Shopify UI/UX design and development for TTRacing - a gaming chair company that strives to give everyone the best comfort experience for when they’re working or playing for long hours.',
      backgroundColor: '#FFFFFF',
      fontColor: '#000000',
      phone: ttracinguihome,
      href: jp ? '/jp/portfolio/ttracing' : '/portfolio/ttracing',
    },
    {
      logo: strived,
      title: 'Strived',
      subtitle: jp
        ? 'ユニークで高品質な製品の提供に重点を置いた完全にカスタマイズされたギフト ショップである Strived の Shopify UI/UX のデザインと開発全体に参加しました。'
        : 'Took part in the entire Shopify UI/UX design and development for Strived - a fully customised gift shop that focuses on providing unique and high-quality products.',
      backgroundColor: '#000000',
      fontColor: '#FFFFFF',
      phone: striveduihome,
      href: jp ? '/jp/portfolio/strived' : '/portfolio/strived',
    },
    {
      logo: steelcase,
      title: 'Steelcase',
      subtitle: jp
        ? 'Steelcase（国際的な家具、ケースグッズ、シーティング、オフィス、病院、教室、住宅インテリア向けの収納および仕切りシステムの製造メーカー）において、ShopifyのUI/UXデザインおよび開発全般に参加しました。'
        : 'Took part in the entire Shopify UI/UX design and development for Steelcase - an international manufacturer of furniture, casegoods, seating, and storage and partitioning systems for offices, hospitals, classrooms, and residential interiors.',
      backgroundColor: '#272725',
      fontColor: '#FFFFFF',
      phone: steelcaseuihome,
      href: jp ? '/jp/portfolio/steelcase' : '/portfolio/steelcase',
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number | null) => {
    if (typeof selectedIndex === 'number') {
      setIndex(selectedIndex);
    }
  };

  return (
    <section className={styles['work-container']} id="work">
      <div className={styles['work-wrap']}>
        <div>
          <h1 className={styles['my-work-header']}>{jp ? '制作事例' : 'Check Out My Work!'}</h1>
        </div>
        <div className={styles['carousel-container']}>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={10000}>
            <Carousel.Item>
              <CarouselCard item={workItems[4]} jp={jp} />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselCard item={workItems[2]} jp={jp} />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselCard item={workItems[3]} jp={jp} />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselCard item={workItems[0]} jp={jp} />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselCard item={workItems[1]} jp={jp} />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

type CarouselCardProps = {
  item: WorkItem;
  jp: boolean;
};

const CarouselCard = ({ item, jp }: CarouselCardProps) => {
  return (
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
                .map((image, imageIndex) => (
                  <div
                    key={`${item.title}-detail-${imageIndex}`}
                    className={styles['work-card-image-wrapper']}
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <LazyImage
                      src={image}
                      className={styles['work-card-image-1']}
                      alt={`${item.title} detail ${imageIndex + 1}`}
                    />
                  </div>
                ))}
            </div>
          ) : null}
          <Link href={item.href} className={styles['work-button']}>
            <span className={styles['work-button-text']} style={{ color: item.backgroundColor, backgroundColor: item.fontColor }}>
              {jp ? '詳しくはこちら' : 'Check it Out'}
            </span>
          </Link>
        </div>
        <div data-aos="fade-left" data-aos-delay="700" className={styles['work-card-phone']}>
          <LazyImage src={item.phone} className={styles['work-card-phone-image']} alt={`${item.title} preview`} />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
