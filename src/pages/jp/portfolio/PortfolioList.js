import {useEffect} from 'react';
import MyLayout from '../../../components/MyLayout';
import styles from '../../styles/PortfolioList.module.css';
import LazyImage from '../../../components/lazy-image';
import Link from 'next/link';
import AOS from 'aos';
import Contact from '../../../components/home/Contact';

// work logo
import snailer from '../../../../public/gif/Snailer.gif';
import urcheckin from '../../../../public/images/urcheckin-logo.png';
import ttracing from '../../../../public/images/ttracing-logo.png';
import strived from '../../../../public/images/strived-logo.png';
import steelcase from '../../../../public/images/steelcase-logo.png';

// work images
import snailerfood from '../../../../public/images/SnailerFood.png';
import snailergrocery from '../../../../public/images/SnailerGrocery.png';
import snailercar from '../../../../public/images/SnailerCar.png';
import urcheckinwalau from '../../../../public/images/UrcheckinWalao.png';
import urcheckintower from '../../../../public/images/UrcheckinTwinTower.png';
import urcheckinsign from '../../../../public/images/UrcheckinRoadSign.png';
import phone from '../../../../public/images/iphonexmock.png';
import snaileruihome from '../../../../public/images/snailer_ui_home.png';
import urcheckinuihome from '../../../../public/images/urcheckin_ui_home.png';
import ttracinguihome from '../../../../public/images/ttracing_ui_home.png';
import striveduihome from '../../../../public/images/strived_ui_home.png';
import steelcaseuihome from '../../../../public/images/steelcase_ui_home.png';

const PortfolioList = ({jp}) => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const PortfolioList = [
    {
        logo: snailer,
        title: 'Snailer',
        subtitle: 'マレーシアのジョホール州に拠点を置くホワイトラベルの食品/食料品配達および車両レンタルアプリである Snailer の UI デザインと開発に参加しました。遊び心のある、クリーンでモダンなアプローチのアプリ・ウェブサイトのデザインです。',
        backgroundColor: '#468d65',
        fontColor: '#FFFFFF',
        description_image: true,
        phone: snaileruihome,
        image1: snailerfood,
        image2: snailergrocery,
        image3: snailercar,
        href: '/jp/portfolio/Snailer',
      },
      {
        logo: urcheckin,
        title: 'Urcheckin',
        subtitle: 'ホームステイを中心とした民泊や観光体験の手配を行う宿泊アプリ「Urcheckin」のUI開発に携わりました。',
        backgroundColor: '#E9493C',
        fontColor: '#FFFFFF',
        description_image: true,
        phone: urcheckinuihome,
        image1: urcheckinsign,
        image2: urcheckinwalau,
        image3: urcheckintower,
        href: '/jp/portfolio/Urcheckin',
      },
      {
        logo: ttracing,
        title: 'TTRacing',
        subtitle: '長時間の仕事やゲームをする際にすべての人に最高の快適さを提供することに努めている「TTRAcing」ゲーミングチェアの会社 の Shopify UI/UX のデザインと開発全体に継続的に参加し、改善を行っていました。',
        backgroundColor: '#FFFFFF',
        fontColor: '#000000',
        phone: ttracinguihome,
        href: '/jp/portfolio/ttracing',
      },
      {
        logo: strived,
        title: 'Strived',
        subtitle: 'ユニークで高品質な製品の提供に重点を置いた完全にカスタマイズされたギフト ショップである Strived の Shopify UI/UX のデザインと開発全体に参加しました。',
        backgroundColor: '#000000',
        fontColor: '#FFFFFF',
        phone: striveduihome,
        href: '/jp/portfolio/strived',
      },
      {
        logo: steelcase,
        title: 'Steelcase',
        subtitle: 'Steelcase（国際的な家具、ケースグッズ、シーティング、オフィス、病院、教室、住宅インテリア向けの収納および仕切りシステムの製造メーカー）において、ShopifyのUI/UXデザインおよび開発全般に参加しました。',
        backgroundColor: '#272725',
        fontColor: '#FFFFFF',
        phone: steelcaseuihome,
        href: '/jp/portfolio/steelcase',
      },
  ];

  return (
    <MyLayout title="Portfolio" description="Portfolio" jp>
      <Portfolio item={PortfolioList[4]} jp/>
      <Portfolio item={PortfolioList[2]} jp/>
      <Portfolio item={PortfolioList[3]} jp/>
      <Portfolio item={PortfolioList[0]} jp/>
      <Portfolio item={PortfolioList[1]} jp/>
      <Contact jp icons/>
    </MyLayout>
  );
};


const Portfolio = ({item, jp}) => {
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
    </section>
  );
};

export default PortfolioList;
