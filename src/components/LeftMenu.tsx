import { useContext } from "react";
import { ThemeContext } from "../App";  

function LeftMenu() {
    const themeContext = useContext(ThemeContext);

    console.log("Context color is " + themeContext.theme);
  return (


    <div className="col-3" style={{ borderRight: "1px solid grey", padding: "20px", display: "flex", flexDirection: "column"}}>
      <div className="row">Recents: </div>
    <div style={{ flex: 1, overflowY: "auto" }}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
      </ul>
    </div>
      <div className="row border" style={{marginTop: "auto"}}>
        <button type ="button" onClick={() => {themeContext.setTheme("light")}} className="btn btn-primary">Light Mode</button>
        <button type ="button" onClick={() => {themeContext.setTheme("dark")}} className="btn btn-primary">Dark Mode</button>
        <button type ="button" onClick={() => {themeContext.setTheme("custom-made-theme")}} className="btn btn-primary">Blue Mode</button>
      </div>
    </div>
  );
}

export default LeftMenu;
