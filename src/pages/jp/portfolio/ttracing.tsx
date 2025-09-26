import { useEffect } from 'react';
import AOS from 'aos';
import MyLayout from '../../../components/MyLayout';
import ProjectDetail, { type ProjectItem } from '../../../components/ProjectDetail';
import ttracinguihome from '../../../../public/images/ttracing_ui_home.png';

const TTRacing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const portfolio: ProjectItem = {
    title: 'TTRacing（ティーティーレーシング）',
    projectdescription: 'TTRacing（ティーティーレーシング）は、ゲーミングチェアの企業であり、誰もが長時間働いたりプレイしたりする際に最高の快適な体験を提供しようと努力しています。',
    projectdescription1: 'Shopifyのウェブサイトは、洗練された、清潔でモダンなアプローチを用いてデザインされました。',
    backgroundColor: '#000000',
    landingimage: ttracinguihome,
    role: 'クリエイティブリード, UI/UX デザイナー, UI 開発者',
    roledescription: 'ビジュアルデザイン, インタラクション, プロトタイピング, ワイヤーフレーム',
    projectdate: '2021年1月 - 2022年3月',
    appstore: false,
    playstore: false,
    prototype: false,
    designsoftware: 'Adobe XD, Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentsoftware: 'Liquid Template Language (Liquid), HTML, CSS, jQuery, Javascript',
    website: true,
    websitelink: 'http://ttracing.my/',
    websitelabel: 'TTRacing',
  };

  return (
    <MyLayout title="TTRacing" jp>
      <ProjectDetail item={portfolio} jp />
    </MyLayout>
  );
};

export default TTRacing;
