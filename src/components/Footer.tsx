import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <div data-bs-theme={theme}>
      <div className="row" style={{ padding: "10px", textAlign: "center", borderTop: "1px solid grey" }}>
        <div className="col-12">João Nunes, Frontend 2026</div>
      </div>
    </div>
  );
}

export default Footer;
