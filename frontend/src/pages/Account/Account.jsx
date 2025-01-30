import React, { useState } from "react";

// Components
import MainInfoForm from "./sections/MainInfoForm";
import SecurityForm from "./sections/SecurityForm";

const TABS = [
  { id: "main", label: "Main Info", component: MainInfoForm },
  { id: "security", label: "Security", component: SecurityForm },
];

const Account = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const ActiveComponent =
    TABS.find((tab) => tab.id === activeTab)?.component || null;

  return (
    <div className="account-page">
      <aside className="account-sidebar">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
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
