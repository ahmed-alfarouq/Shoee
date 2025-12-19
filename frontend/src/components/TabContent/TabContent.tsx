import styles from "./TabContent.module.scss";

import type { TabContentProps } from "./TabContent.types";

const TabContent = ({
  children,
  activeTab,
  gridTemplateColumns,
}: TabContentProps) => {
  return (
    <div
      id={`tabpanel-${activeTab}`}
      role="tabpanel"
      aria-labelledby={`tab-${activeTab}`}
      className={styles.tab}
      style={{
        gridTemplateColumns,
      }}
    >
      {children}
    </div>
  );
};

export default TabContent;
