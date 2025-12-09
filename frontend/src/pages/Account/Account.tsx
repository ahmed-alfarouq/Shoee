import { useState } from "react";

import styles from "./Account.module.scss";

import { Tabs } from "@/components/Tabs";

import { settingsTabs } from "@/constants";

const tabs = settingsTabs.map((t) => t.label);

const Account = () => {
  const [activeTab, setActiveTab] = useState(settingsTabs[0].label);

  const ActiveComponent = settingsTabs.find(
    (tab) => tab.label === activeTab
  )?.component;

  const changeTabs = (id: string) => {
    setActiveTab(id);
  };

  return (
    <section className={styles.account}>
      <div className="container">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          changeTab={changeTabs}
          ariaLabel="Account Settings"
        />

        <section className={styles.account_content}>
          {ActiveComponent && <ActiveComponent />}
        </section>
      </div>
    </section>
  );
};

export default Account;
