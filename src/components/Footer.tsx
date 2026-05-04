import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <div data-bs-theme={theme}>
      <div className="row border">
        <div className="col-12">A1Pr0ject</div>
      </div>
    </div>
  );
}

export default Footer;
