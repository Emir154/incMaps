import {Link} from "react-router";
import React from "react";
import {useTranslation} from "react-i18next";
import './../../styles/main.scss'

export default function Drawer({drawerStyle, isOpen, onClose, drawerLinks=""}) {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <>
            <div className={`drawer ${isOpen ? 'drawer--open' : ''}`}>
                <div className="drawer__main" style={drawerStyle}>
                <div className="drawer__line"></div>
                    {drawerLinks.map((link, index) => (
                        <>{index !== drawerLinks.length - 1 ?
                            (<Link className="drawer__nav--link--m" to={link.to}>{link.name}</Link>) : (
                                <Link className="drawer__nav--link--m" to={link.to}>{link.name}</Link>)}
                            </>))}
                <div className="drawer__line"></div>
                <div className="drawer__container-getinvolved">
                    <h2 className="drawer__title-getinvolved">{t("Get Involved")}</h2>
                    <div className="drawer__content-svgs">
                        <div className="drawer__content-interaction">
                        <img className="drawer__svg" src="/assets/icons/iconsDrawer/donation1.svg" alt="icon"/>
                        <a className="drawer__ahref-link" href="/">{t("Donate")}</a>
                        </div>
                        <div className="drawer__content-interaction">
                        <img className="drawer__svg" src="/assets/icons/iconsDrawer/web-programming1.svg" alt="icon"/>
                        <a className="drawer__ahref-link" href="/">{t("Contribute Code")}</a>
                        </div >
                            <div className="drawer__content-interaction">
                        <img className="drawer__svg" src="/assets/icons/iconsDrawer/map-location1.svg" alt="icon"/>
                        <a className="drawer__ahref-link" href="/">{t("Contribute Location Info")}</a>
                    </div>
                    </div>
                </div>
                <div className="drawer__line"></div>
                <h2 className="drawer__title-getinvolved">{t("Freedom Awaits")}</h2>
                <p className="drawer__title">{t("Download now")}</p>
                <div className="drawer__container-iapps">
                    <a className="drawer__iapps-link" href=""><img className="drawer__iapp-svg" src="/assets/icons/iconsDrawer/Mobileappstore%20badge.svg" alt="app"/></a>
                    <a className="drawer__iapps-link" href=""><img className="drawer__iapp-svg" src="/assets/icons/iconsDrawer/Mobileapp%20tore%20badge1.svg" alt="app"/></a>
                    <a className="drawer__iapps-link" href=""><img className="drawer__iapp-svg" src="/assets/icons/iconsDrawer/Frame1319.svg" alt="app"/></a>
                    <a className="drawer__iapps-link" href=""><img className="drawer__iapp-svg" src="/assets/icons/iconsDrawer/Frame1320.svg" alt="app"/></a>
                </div>
                </div>
            </div>
        </>
    )
}