import React, { Component } from "react";
import { Link } from "react-router-dom";

class UnitTabs extends Component {
  returnTabLinkClass(selectedKey, tabKey) {
    if (selectedKey === tabKey) return "nav-link active";
    return "nav-link";
  }

  render() {
    const { tabs, unitId, currentTabKey } = this.props;
    return (
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li key={tab.key} className="nav-item">
            <Link
              className={this.returnTabLinkClass(currentTabKey, tab.key)}
              to={`/units/${unitId}/${tab.key}`}
              onClick={() => this.props.onTabChange(tab.key)}
            >
              Ticket
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default UnitTabs;
