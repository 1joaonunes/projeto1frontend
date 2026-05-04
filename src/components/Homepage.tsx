import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "../App";
function Homepage () {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`container-fluid text-center border ${theme}`}>
            <Content />
        </div>
    );
}

export default Homepage;