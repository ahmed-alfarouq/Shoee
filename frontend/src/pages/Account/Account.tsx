import { useState } from "react";

import { settingsTabs } from "@/constants";

const Account = () => {
  const [activeTab, setActiveTab] = useState(settingsTabs[0].id);

  const ActiveComponent: React.ReactNode =
    settingsTabs.find((tab) => tab.id === activeTab)?.component || null;

  const changeTabs = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className="account-page">
      <aside className="account-sidebar">
        {settingsTabs.map((tab) => (
          <button
            key={tab.id}
            className={`btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => changeTabs(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </aside>

      <section className="account-content">
        {ActiveComponent && <ActiveComponent />}
      </section>
    </div>
  );
};

export default Account;
