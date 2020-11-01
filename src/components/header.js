import Link from "next/link";
import Logo from "../../public/Logo.png";

import styles from "./styles/Header.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles["header-container"]}>
        <Link href="/">
          <div data-aos="zoom-in" data-aos-delay="100">
            <a className={styles["logo-container"]}>
              <div className={styles["logo-image-wrapper"]}>
                <img
                  src={Logo}
                  className={styles["logo-image"]}
                  alt="Jia Sheng Yeap"
                />
              </div>
              <a className={styles["logo-name"]}>Jia Sheng Yeap</a>
            </a>
          </div>
        </Link>

        <div className={styles["header-navigation"]}>
          <li>
            <Link href="/portfolio/index">
              <a className={styles["portfolio-text"]}>Portfolio</a>
            </Link>
          </li>
          <li className={styles["resume-style"]}>
            <Link href="/Resume(Jia Sheng).pdf">
              <a target="_BLANK" className={styles["resume-text"]}>
                Resume
              </a>
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
