import React from 'react';
import {Link} from 'react-router'
import Buttons from '../../../components/Buttons/Buttons';
import BurgerMenu from "../../BurgerMenu/HomeHeaderBurgerMenu";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import {useTranslation} from "react-i18next";
import '../../../styles/main.scss'

export default function HomeHeader({drawerLinks}) {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <header className="header">
            <section className="header__container">
                <Link className="header__nav--link" to="/">
                    <img className="header__logoinc" src="/assets/images/HomeImages/logoincmap/logoinc.png" alt="logo"/>
                </Link>
                <nav className="header__nav">
                    <ul className="header__nav--list">
                        <Link className="header__nav--link--m" to="/Community">{t("Community")}</Link>
                        <Link className="header__nav--link--m" to="/Weather">{t("Weather")}</Link>
                    </ul>
                </nav>
                <div className="header__buttons">
                    <ThemeToggle/>
                    <Buttons children={t("Download")} size="button button--size-m"/>
                    <BurgerMenu drawerLinks={drawerLinks}/>
                </div>
            </section>
            <div className="header__description--container">
                <div className="header__container--head--description">
                    <h1 className="header__main--description">{t("Navigate with Privacy. Drive, Hike, Bike Offline")}</h1>
                    <p className="header__main--description--n2">{t("The ultimate companion app for travelers, built by the community.")}</p>
                    <Buttons children={t("Download")} size="button button--size-sm"></Buttons>
                </div>
                <div className="header__desc--img">
                    <img loading="" className="header__desc-img1" src="/assets/images/HomeImages/OMnWalking.png" alt="our_maps"/>
                    <img className="header__desc-img2" src="/assets/images/HomeImages/OMsAstronomical%20clock.png" alt="our_maps"/>
                    <img className="header__desc-img3" src="/assets/images/HomeImages/OMDriving3.png" alt="our_maps" />
                </div>
            </div>
        </header>)
}