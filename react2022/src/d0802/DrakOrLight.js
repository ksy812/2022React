import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    const [ theme, setTheme ] = useState("light");

    const toggleTheme = useCallback(()=>{
        setTheme(theme==="light"?"dark":"light");
    });

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;