import {useEffect} from 'react';
import AOS from 'aos';
import styles from '../styles/seyebot.module.css';
import MyLayout from '../../components/MyLayout';

const SeyeBot = () => {

  useEffect(() => {
    AOS.init();
  });


  return (
    <MyLayout title="SeyeBot">

    </MyLayout>
  );
};

export default SeyeBot;
