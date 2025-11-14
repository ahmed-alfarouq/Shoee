import formatText from "utils/formatText";

const Tabs = ({ tabs, activeTab, changeTab, ariaLabel }) => {
    return (
        <div
            className="tabs-wrapper"
            role="tablist"
            aria-label={ariaLabel}
        >
            {tabs.map((tab) => (
                <button
                    type="button"
                    key={tab}
                    id={`tab-${tab}`}
                    aria-controls={`tabpanel-${tab}`}
                    className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                    onClick={() => changeTab(tab)}
                >
                    {formatText(tab)}
                </button>
            ))}
        </div>
    )
}

export default Tabs