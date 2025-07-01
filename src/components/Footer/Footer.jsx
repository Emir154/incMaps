import {Link} from "react-router";
import './../../styles/main.scss'
import {useTranslation} from "react-i18next";

export default function Footer() {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('locale', lang);
    }



    return (
        <footer className="footer">
        <div className="footer__container-logo">
            <img className="footer__logo"  src="/assets/images/HomeImages/logoincmap/logoinc.png" alt="logo"/>
            <div className="footer__container-lang footer__container-lang--visible">
                <img className="footer__worldsvg" src="/assets/images/HomeImages/imagesFooter/World.svg" alt="world"/>
                <select value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en" className="footer__select">EN</option>
                    <option value="ua" className="footer__select">UA</option>
                </select>
            </div>
            <span className="footer__title">
                © 2025 Inc Maps
            </span>
        </div>
        <div className="footer__line"></div>
        <div className="footer__container-links-list">
            <div className="footer__list">
            <Link className="footer__link" to="/">{t("Home")}</Link>
            <Link className="footer__link" to="/Community">{t("Community")}</Link>
            <Link className="footer__link" to="/">{t("Volunteering")}</Link>
            <Link className="footer__link" to="/Weather">{t("Weather")}</Link>
            <Link className="footer__link" to="/">{t("Download")}</Link>
            <Link className="footer__link" to="/">{t("Donate")}</Link>
            <Link className="footer__link" to="/">{t("Help")}</Link>
            <Link className="footer__link" to="/">{t("FAQ")}</Link>
            <Link className="footer__link" to="/">{t("About")}</Link>
            </div>
            <div className="footer__container-lang">
                <img src="/assets/images/HomeImages/imagesFooter/World.svg" alt="world"/>
                <select value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en" className="footer__select">EN</option>
                    <option value="ua" className="footer__select">UA</option>
                </select>
                </div>
                </div>
            <div className="footer__line--mobile-visible"></div>
    </footer>)
}