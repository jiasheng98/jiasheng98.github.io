import { useEffect } from 'react';
import AOS from 'aos';
import MyLayout from '../../../components/MyLayout';
import ProjectDetail, { type ProjectItem } from '../../../components/ProjectDetail';
import snaileruihome from '../../../../public/images/snailer_ui_home.png';

const Snailer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const portfolio: ProjectItem = {
    title: 'Snailer（スネイラー）',
    projectdescription: 'Snailer（スネイラー）は、食品・食料品のデリバリーや車両のレンタルサービスのためのモバイルアプリケーションおよびウェブサイトです。',
    projectdescription1:
      '合計3つのアプリと1つのウェブサイトがあります。主に、Consumer App（消費者向けアプリ）、Rider App（ライダー向けアプリ）、Merchant App（店舗向けアプリ）、そしてSnailer Landing Page（スネイラーランディングページ）です。これらのアプリとウェブサイトは、遊び心のある、清潔でモダンなアプローチを用いてデザインされています。',
    backgroundColor: '#468d65',
    landingimage: snaileruihome,
    role: 'UI/UX デザイナー, UI 開発者',
    roledescription: 'ビジュアルデザイン, インタラクション, プロトタイピング, ワイヤーフレーム',
    projectdate: '2020年7月 - 2020年12月',
    appstorelink: 'https://apps.apple.com/us/app/snailer/id1540536548',
    playstorelink: 'https://play.google.com/store/apps/details?id=com.snailer_consumer&hl=en&gl=US',
    prototype: false,
    appstore: true,
    playstore: true,
    designsoftware: 'Adobe XD, Adobe Photoshop, Adobe Illustrator, Adobe After Effects',
    developmentsoftware: 'React, HTML, CSS, Javascript',
    website: false,
  };

  return (
    <MyLayout title="Snailer" jp>
      <ProjectDetail item={portfolio} jp />
    </MyLayout>
  );
};

export default Snailer;
