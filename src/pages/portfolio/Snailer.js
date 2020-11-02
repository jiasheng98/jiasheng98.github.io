import {useEffect} from 'react';
import AOS from 'aos';
import MyLayout from '../../components/MyLayout';
import ProjectDetail from '../../components/ProjectDetail';

const Snailer = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <MyLayout title="Snailer">
      <ProjectDetail />
    </MyLayout>
  );
};

export default Snailer;
