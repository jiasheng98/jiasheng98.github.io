import { useEffect } from 'react';
import AOS from 'aos';
import MyLayout from '../../../components/MyLayout';
import ProjectDetail, { type ProjectItem } from '../../../components/ProjectDetail';
import steelcaseuihome from '../../../../public/images/steelcase_ui_home.png';

const Steelcase = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const portfolio: ProjectItem = {
    title: 'Steelcase（スチールケース）',
    projectdescription:
      'Steelcase（スチールケース）は、オフィス、病院、教室、および住宅インテリア向けの家具、ケースグッズ、シーティング、収納および仕切りシステムの国際的な製造メーカーです。',
    projectdescription1: 'Shopifyのウェブサイトは、洗練された、清潔でモダンなアプローチを用いてデザインされました。',
    backgroundColor: '#000000',
    landingimage: steelcaseuihome,
    role: 'UI/UX デザイナー, UI 開発者',
    roledescription: 'ビジュアルデザイン, インタラクション, プロトタイピング, ワイヤーフレーム',
    projectdate: '2022年3月 - 現在',
    appstore: false,
    playstore: false,
    prototype: false,
    designsoftware: 'Adobe XD, Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentsoftware: 'Liquid Template Language (Liquid), HTML, CSS, jQuery, Javascript',
    website: true,
    websitelink: 'https://jp.steelcase.com/',
    websitelabel: 'Steelcase',
  };

  return (
    <MyLayout title="Steelcase" jp>
      <ProjectDetail item={portfolio} jp />
    </MyLayout>
  );
};

export default Steelcase;
