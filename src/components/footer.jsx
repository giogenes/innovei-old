import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">
          Ⓒ Innovei Technologies {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
