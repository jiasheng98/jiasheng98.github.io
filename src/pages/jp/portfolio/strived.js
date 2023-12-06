import {useEffect} from 'react';
import AOS from 'aos';
import MyLayout from '../../../components/MyLayout';
import ProjectDetail from '../../../components/ProjectDetail';

// Assets
import phone from '../../../../public/images/iphonexmock.png';
import striveduihome from '../../../../public/images/strived_ui_home.png';

const Strived = () => {
  useEffect(() => {
    AOS.init();
  });

  const PortfolioList = {
    title: 'Strived（ストライブド）',
    projectdescription:
      'Strived（ストライブド）は、ユニークで高品質な製品を提供することに焦点を当てた、完全にカスタマイズされたギフトショップです。',
    projectdescription1:
      'Shopifyのウェブサイトは、洗練された、清潔でモダンなアプローチを用いてデザインされました。',
    backgroundColor: '#000000',
    landingimage: striveduihome,
    role: 'UI/UX デザイナー, UI 開発者',
    roledescription:
      'ウェブサイトデザイン, コピーライティング',
    projectdate: '2021年6月 - 2021年7月',
    appstore: false,
    playstore: false,
    prototype: false,
    designsoftware: 'Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentsoftware: 'Liquid Template Language (Liquid), HTML, CSS, Jquery, Javascript',
    website: true,
    websitelink: 'https://strivedmy.com/',
    websitelabel: 'Strived'
  };

  const Data = [
    {
      label: 'Consumer',
      href: '/index',
    },
    {
      label: 'Merchant',
      href: '/index',
    },
    {
      label: 'Rider',
      href: '/index',
    },
    {
      label: 'Landing Page',
      href: '/index',
    },
  ];

  // const Website = [
  //   {
  //     label: 'Landing Page',
  //     href: 'http://ttracing.my/',
  //   },
  // ];

  return (
    <MyLayout title="Strived Malaysia"  jp>
      <ProjectDetail item={PortfolioList} data={Data} jp/>
    </MyLayout>
  );
};

export default Strived;

