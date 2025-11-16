import styles from "./Tabs.module.scss";

import { Button } from "../Button";

import formatText from "@/utils/formatText";

import type { TabsProps } from "./Tabs.types";

const Tabs = ({ tabs, activeTab, changeTab, ariaLabel }: TabsProps) => {
  return (
    <div className={styles.tabs_wrapper} role="tablist" aria-label={ariaLabel}>
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
