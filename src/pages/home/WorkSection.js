import { useState } from "react";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import LazyImage from "../../components/lazy-image";

import styles from "../styles/WorkSection.module.css";

// work logo
import snailer from "../../../public/gif/snailer.gif";
import urcheckin from "../../../public/images/urcheckin-logo.png";

// work images
import snailerfood from "../../../public/images/SnailerFood.png";
import snailergrocery from "../../../public/images/SnailerGrocery.png";
import snailercar from "../../../public/images/SnailerCar.png";
import urcheckinwalau from "../../../public/images/UrcheckinWalao.png";
import urcheckintower from "../../../public/images/UrcheckinTwinTower.png";
import urcheckinsign from "../../../public/images/UrcheckinRoadSign.png";
import phone from "../../../public/images/iphonexmock.png";

const WorkSection = () => {
  const PortfolioList = [
    {
      logo: snailer,
      title: "Snailer",
      subtitle:
        "Took part in UI design and development for Snailer - a white-labeled food/grocery delivery and vehicle hiring app based in Johor, Malaysia. The app and website is designed using playful, clean and modern approach.",
      backgroundColor: "#22c639",
      phone: phone,
      image1: snailerfood,
      image2: snailergrocery,
      image3: snailercar,
      href: "/portfolio/Snailer"
    },
    {
      logo: urcheckin,
      title: "Urcheckin",
      subtitle:
        "Took part in UI development for Urcheckin - A lodging app which offers arrangement for vacation rental, primarily homestays, or tourism experiences. ",
      backgroundColor: "#E9493C",
      phone: phone,
      image1: urcheckinsign,
      image2: urcheckinwalau,
      image3: urcheckintower,
      href: "/portfolio/Urcheckin"
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className={styles["work-container"]} id="work">
      <div className={styles["work-wrap"]}>
        <div>
          <h1 className={styles["my-work-header"]}>Check Out My Work!</h1>
        </div>
        <div className={styles["carousel-container"]}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={10000}
          >
            <Carousel.Item>
              <CarouselCard item={PortfolioList[0]} />
            </Carousel.Item>
            <Carousel.Item>
              <CarouselCard item={PortfolioList[1]} />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const CarouselCard = ({ item }) => {
  return (
    <div>
      <div
        className={styles["work-card-container"]}
        style={{ backgroundColor: item.backgroundColor }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className={styles["work-card-body"]}>
          <div>
            <div className={styles["work-title-row"]}>
              <div data-aos="fade-right" data-aos-delay="700">
                <LazyImage
                  src={item.logo}
                  className={styles["work-gif-logo"]}
                />
              </div>
              <p className={styles["work-card-title"]}>{item.title}</p>
            </div>
            <p className={styles["work-card-subtitle"]}>{item.subtitle}</p>
          </div>
          <div className={styles["work-card-image-container"]}>
            <div
              className={styles["work-card-image-wrapper"]}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <LazyImage
                src={item.image1}
                className={styles["work-card-image-1"]}
              />
            </div>
            <div
              className={styles["work-card-image-wrapper"]}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <LazyImage
                src={item.image2}
                className={styles["work-card-image-1"]}
              />
            </div>
            <div
              className={styles["work-card-image-wrapper"]}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <LazyImage
                src={item.image3}
                className={styles["work-card-image-1"]}
              />
            </div>
          </div>
          <Link href={item.href}>
            <button className={styles["work-button"]}>
              <p
                className={styles["work-button-text"]}
                style={{ color: item.backgroundColor }}
              >
                Check it Out
              </p>
            </button>
          </Link>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="700"
          className={styles["work-card-phone"]}
        >
          <LazyImage
            src={item.phone}
            className={styles["work-card-phone-image"]}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;