import './ThemeToggle.scss'
import React, {useEffect, useState} from "react";

function ThemeToggle() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');


    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }
return (
    <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
        <span className="slider round"></span>
    </label>
)

}

export default ThemeToggle;