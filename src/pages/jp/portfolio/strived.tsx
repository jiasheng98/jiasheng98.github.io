import { useEffect } from 'react';
import AOS from 'aos';
import MyLayout from '../../../components/MyLayout';
import ProjectDetail, { type ProjectItem } from '../../../components/ProjectDetail';
import striveduihome from '../../../../public/images/strived_ui_home.png';

const Strived = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const portfolio: ProjectItem = {
    title: 'Strived（ストライブド）',
    projectdescription: 'Strived（ストライブド）は、ユニークで高品質な製品を提供することに焦点を当てた、完全にカスタマイズされたギフトショップです。',
    projectdescription1: 'Shopifyのウェブサイトは、洗練された、清潔でモダンなアプローチを用いてデザインされました。',
    backgroundColor: '#000000',
    landingimage: striveduihome,
    role: 'UI/UX デザイナー, UI 開発者',
    roledescription: 'ウェブサイトデザイン, コピーライティング',
    projectdate: '2021年6月 - 2021年7月',
    appstore: false,
    playstore: false,
    prototype: false,
    designsoftware: 'Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentsoftware: 'Liquid Template Language (Liquid), HTML, CSS, jQuery, Javascript',
    website: true,
    websitelink: 'https://strivedmy.com/',
    websitelabel: 'Strived',
  };

  return (
    <MyLayout title="Strived Malaysia" jp>
      <ProjectDetail item={portfolio} jp />
    </MyLayout>
  );
};

export default Strived;
