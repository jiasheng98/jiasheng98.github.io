import {useEffect} from 'react';
import AOS from 'aos';
import MyLayout from '../../../components/MyLayout';
import ProjectDetail from '../../../components/ProjectDetail';

// Assets
import phone from '../../../../public/images/iphonexmock.png';
import urcheckinuihome from '../../../../public/images/urcheckin_ui_home.png';

const Urcheckin = () => {
  useEffect(() => {
    AOS.init();
  });

  const PortfolioList = {
    title: 'Urcheckin（ユアチェキン）',
    projectdescription:
      'Urcheckin（ユアチェキン）は、主に民宿や観光体験などのバケーションレンタルの手配を提供する宿泊アプリです。',
    projectdescription1:
      '合計2つのアプリと2つのウェブサイトがあり、主にConsumer App（消費者向けアプリ）、Merchant App（店舗向けアプリ）、Consumer Website（消費者向けウェブサイト）、Merchant Website（店舗向けウェブサイト）があります。アプリはReact Nativeを使用して開発され、ウェブサイトはReactを使用して開発されています。',
    backgroundColor: '#E9493C',
    landingimage: urcheckinuihome,
    role: 'UI/UX デザイナー, UI 開発者',
    roledescription:
      'ビジュアルデザイン, インタラクション, プロトタイピング, ワイヤーフレーム',
    projectdate: '2020年6月 - 2020年8月',
    appstore: true,
    playstore: true,
    appstorelink: 'https://apps.apple.com/us/app/urcheckin/id1507771058',
    playstorelink:
      'https://play.google.com/store/apps/details?id=com.urcheckin_host.beta&hl=en_US&gl=US',
    designsoftware: 'Adobe XD, Adobe Photoshop, Adobe Illustrator',
    developmentsoftware: 'React, HTML, CSS, Javascript',
    website: false,
  };

  // const Website = [
  //   {
  //     label: 'Consumer',
  //     href: 'https://urcheckin.com/',
  //   },
  //   {
  //     label: 'Merchant',
  //     href: 'https://host.urcheckin.com/signIn',
  //   },
  // ];

  return (
    <MyLayout title="Urcheckin"  jp>
      <ProjectDetail item={PortfolioList} jp />
    </MyLayout>
  );
};

export default Urcheckin;
