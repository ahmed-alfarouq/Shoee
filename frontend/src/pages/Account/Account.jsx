import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { clearAll } from "app/features/main/mainSlice";

import { settingsTabs } from "constants";

const Account = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(settingsTabs[0].id);

  const ActiveComponent =
    settingsTabs.find((tab) => tab.id === activeTab)?.component || null;

  const changeTabs = (id) => {
    setActiveTab(id);
    dispatch(clearAll());
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
