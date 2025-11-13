import React from 'react'

const TabContent = ({ children, activeTab, gridTemplateColumns }) => {
    return (
        <div
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="cards-container tab-content"
            style={{
                gridTemplateColumns,
            }}
        >{children}</div>
    )
}

export default TabContent