import {Link} from "react-router";
import Buttons from "../../Buttons/Buttons";
import BurgerMenu from "../../BurgerMenu/HomeHeaderBurgerMenu";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import React from "react";
import './../../../styles/main.scss'
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import {useTranslation} from "react-i18next";

export default function SecondTypeHeader({breadcrumbs, drawerLinks="", title="", description="", links= ""} ) {
    const {t} = useTranslation();

    return (
        <header className="secondheader">
            <section className="secondheader__container">
                <Link className="secondheader__nav--link" to="/">
                    <img className="secondheader__logoinc" src="/assets/images/HomeImages/logoincmap/logoinc.png" alt="logo"/>
                </Link>
                <nav className="secondheader__nav">
                    <ul className="secondheader__nav--list">
                        {links.map((link, index) => (
                            <li key={index}>
                        <Link className="secondheader__nav--link--m" to={link.to}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="secondheader__buttons">
                    <ThemeToggle/>
                    <Buttons children={t("Download")} size="button button--size-sm-bluesecondheader"/>
                    <BurgerMenu parent={'SecondTypeHeader'} drawerLinks={drawerLinks} />
                </div>
            </section>
            <BreadCrumbs breadcrumbs={breadcrumbs} />
            <div className="secondheader__description--container">
                <div className="secondheader__container--head--description">
                    <h1 className="secondheader__main--description">{title}</h1>
                    <p className="secondheader__main--description--n2">{description}</p>
                </div>
            </div>
        </header>
    )
}
