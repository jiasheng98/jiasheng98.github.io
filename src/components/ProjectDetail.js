import styles from './styles/ProjectDetail.module.css';

// Assets
import appstore from '../../public/images/appstore.png';
import playstore from '../../public/images/playstore.png';

const ProjectDetail = ({item, data, jp}) => {
  return (
    <>
      <LandingSection item={item} />
      <DescriptionSection item={item} data={data} jp={jp}  />
    </>
  );
};

const LandingSection = ({item}) => {
  return (
    <div
      className={styles['landing-section-container']}
      style={{backgroundColor: item.backgroundColor}}>
      <img src={item.landingimage} className={styles['image-container']} />
    </div>
  );
};

const DescriptionSection = ({item, data, website, jp}) => {
  return (
    <div className={styles['description-section-container']}>
      <div className={styles['description-wrapper']}>
        <h1 className={styles['title-text']}>{item.title}</h1>
        <div className={styles['description-subtitle']}>
          <div>
            <p className={styles['role-title']}>{jp ? '概要': 'Overview'}</p>
            <p>{item.projectdescription}</p>
            <p>{item.projectdescription1}</p>
            <p><span className={styles['role-title']} >{jp ? 'デザイン:': 'Design:'}</span> {item.designsoftware}</p>
            <p><span className={styles['role-title']}>{jp ? '開発:': 'Development:'}</span> {item.developmentsoftware}</p>
          </div>
          <div>
            <p className={styles['role-title']}>{jp ? '役割': 'Role'}</p>
            <p className={styles['role-title']}>{item.role}</p>
            <p>{item.roledescription}</p>
            <p>{item.projectdate}</p>
          </div>
        </div>
        <hr className={styles['hr--medium']}/>
        {item.prototype === true ? (
          <div className={styles['button-container']}>
            {data.map((data) => {
              return (
                <a
                  style={{backgroundColor: item.backgroundColor}}
                  className={styles['prototype-button']}
                  target="_BLANK"
                  href={data.href}>
                  <div>
                    <p>{jp ? 'プロトタイプを見る': 'See Prototype'} ({data.label})</p>
                  </div>
                </a>
              );
            })}
          </div>
        ) : null}
        <div className={styles['button-container-app']}>
        {item.appstore === true ? (
          <a
            href={item.appstorelink}
            target="_BLANK"
            className={styles['prototype-button']}>
            <div className={styles['app-button-container']}>
              <img className={styles['app-button']} src={appstore} />
            </div>
          </a>
           ) : null}
            {item.playstore === true ? (
          <a
            href={item.playstorelink}
            target="_BLANK"
            className={styles['prototype-button']}>
            <div className={styles['app-button-container']}>
              <img className={styles['app-button']} src={playstore} />
            </div>
          </a>
          ) : null}
          {/* {website.map((website) => {
            return (
              <a
                className={styles['website-button']}
                href={website.href}
                target="_BLANK">
                <div>
                  <p>See Website ({website.label})</p>
                </div>
              </a>
            );
          })} */}
      {item.website === true ? (
              <a
                className={styles['website-button']}
                href={item.websitelink}
                target="_BLANK">
                <div>
                  <p>{jp ? 'ウェブサイトを見る': 'See Website'} ({item.websitelabel})</p>
                </div>
              </a>
     ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
