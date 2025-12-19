import styles from "./Tabs.module.scss";

import { Button } from "@components/Button";

import formatText from "@/utils/formatText";

import type { TabsProps } from "./Tabs.types";

const Tabs = ({
  tabs,
  activeTab,
  changeTab,
  className = " ",
  ariaLabel,
}: TabsProps) => {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={`${styles.tabs_wrapper} ${className}`}
    >
      {tabs.map((tab) => (
        <Button
          key={tab}
          size="sm"
          variant="ghost"
          id={`tab-${tab}`}
          aria-controls={`tabpanel-${tab}`}
          className={`${styles.tab_btn} ${activeTab === tab && styles.active}`}
          onClick={() => changeTab(tab)}
        >
          {formatText(tab)}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
