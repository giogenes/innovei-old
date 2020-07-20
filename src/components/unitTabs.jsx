import React from "react";
import { Nav } from "react-bootstrap";

const UnitTabs = ({ defaultActiveKey, onSelect, tabs }) => {
  return (
    <Nav variant="tabs" defaultActiveKey={defaultActiveKey} onSelect={onSelect}>
      {tabs.map((tab) => (
        <Nav.Item key={tab.key}>
          <Nav.Link eventKey={tab.key}>{tab.name}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default UnitTabs;
