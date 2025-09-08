import './HomeHeaderBurgerMenu.scss'
import React, {useState, useRef} from "react";
import Drawer from "../Drawer/Drawer";

export default function BurgerMenu({parent, drawerLinks=""}) {
const menuButtonRef = useRef(null);
const [isNavVisible, setNavVisible] = useState(false);

// background color secondheader/drawer settings
    let drawerSkyBlue = {};

    if (parent === 'SecondTypeHeader') {
        drawerSkyBlue = {backgroundColor: 'var(--colorbackgroundheadersecondblue)'};
    }

const toggleMenu = () => {
    setNavVisible(prev => !prev);
}

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => setIsOpen(prev => !prev);

return (
    <>
    <div className="drawer__button" onClick={toggleDrawer}>
    <div className={`header__nav-button ${isNavVisible ? 'header__nav-button--open' : ''}`} onClick={toggleMenu} ref={menuButtonRef}>
        <div className="header__nav-line"></div>
        <div className="header__nav-line"></div>
        <div className="header__nav-line"></div>
    </div>
    </div>
        <Drawer isOpen={isOpen} onClose={toggleDrawer} drawerStyle={drawerSkyBlue} drawerLinks={drawerLinks}/>
    </>
)
}