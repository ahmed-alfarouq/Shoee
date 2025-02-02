import React, { useState } from "react";

// Components
import MainInfoForm from "./sections/MainInfoForm";
import SecurityForm from "./sections/SecurityForm";
import OrderInfoForm from "./sections/OrderInfoForm";
import { useDispatch } from "react-redux";
import { clearAll } from "../../app/features/main/mainSlice";

const TABS = [
  { id: "main", label: "Main Info", component: MainInfoForm },
  { id: "security", label: "Security", component: SecurityForm },
  { id: "order", label: "Order Info", component: OrderInfoForm },
];

const Account = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const ActiveComponent =
    TABS.find((tab) => tab.id === activeTab)?.component || null;

  const changeTabs = (id) => {
    setActiveTab(id);
    dispatch(clearAll());
  };

  return (
    <div className="account-page">
      <aside className="account-sidebar">
        {TABS.map((tab) => (
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
