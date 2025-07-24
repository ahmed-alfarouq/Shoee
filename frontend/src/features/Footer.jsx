import Menu from "components/Menu";

import { footerSocialMenu } from "constants";
import { footerSecondMenu } from "constants";
import { footerFirstMenu } from "constants";

const Footer = () => {
  return (
    <footer>
      <div className="primary-footer-wrap">
        <Menu direction="vertical" items={footerFirstMenu} />
        <Menu direction="vertical" items={footerSecondMenu} />
        <Menu direction="horizontal" items={footerSocialMenu} />
      </div>
      <p>Copyright © 2025 Custom Printing Pro</p>
    </footer>
  );
};

export default Footer;
