import styles from "./Footer.module.scss";

import { NavMenu } from "@features/NavMenu";
import { SocialIcons } from "@features/SocialIcons";

import { footerFirstMenu, footerSocialMenu } from "@/constants";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={`${styles.upper_footer_content} container`}>
        <NavMenu items={footerFirstMenu} />
        <SocialIcons items={footerSocialMenu} direction="horizontal" />
      </section>

      <p className={styles.copyright}>Copyright © 2025 Custom Printing Pro</p>
    </footer>
  );
};

export default Footer;
