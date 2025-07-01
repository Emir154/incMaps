import SecondTypeHeader from "../../components/Header/SecondTypeHeader/SecondTypeHeader";
import Buttons from "../../components/Buttons/Buttons";
import React from "react";
import Footer from "../../components/Footer/Footer";
import {useTranslation} from "react-i18next";
import './../../styles/main.scss'


export default function Community() {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }
    return (
        <>
        <SecondTypeHeader
            breadcrumbs ={[
                {name: t('Home'), path: '/'},
                {name: t('Weather'), path: '/Weather'},
            ]}
            links={[
                    {name: t('Home'), to: '/'},
                    {name: t('Weather'), to: '/Weather'},
            ]}
            drawerLinks={[
                {name: t('Home' ), to: '/'},
                {name: t('Weather' ), to: '/Weather'},
            ]}
            title={t("Community")}
                description={t("Inc Maps is created and maintained by people like you")}
                />
                <main className="main">
                <div className="main__community-contributions">
                <div className="main__information-window">
                <div className="main__information">
                <img className="main__image-window" src="/assets/images/CommunityImages/CommunityContainerMain/Rectangle%20189.png" alt="window" loading="lazy"/>
                <div className="main__image-actions--bg">
                <img className="main__image-actions" src="/assets/images/CommunityImages/CommunitySVGs/qa1.svg" alt="actions"/>
                </div>
                </div>
                <h2 className="main__title-contributions">{t("Join the")} <span
                className="main__title-contributions--blue">{t("Discussion")}</span>
                </h2>
                <div className="main__line"></div>
                <span className="main__description-contributions">{t("Report bugs, discuss idea, and propose features")}</span>
                </div>
                <div className="main__information-window">
                <div className="main__information">
                <img className="main__image-window" src="/assets/images/CommunityImages/CommunityContainerMain/Rectangle190.png" alt="window" loading="lazy"/>
                <div className="main__image-actions--bg">
                <img className="main__image-actions" src="/assets/images/CommunityImages/CommunitySVGs/web-programming.svg" alt="actions"/>
                </div>
                </div>
                <h2 className="main__title-contributions">{t("Contribute")} <span
                className="main__title-contributions--blue">{t("Code")}</span></h2>
                <div className="main__line"></div>
                <span className="main__description-contributions">{t("Help fix bugs, do code reviews, and develop new features.")}</span>
                </div>
                <div className="main__information-window">
                <div className="main__information">
                <img className="main__image-window" src="/assets/images/CommunityImages/CommunityContainerMain/Rectangle200.png" alt="window" loading="lazy"/>
                <div className="main__image-actions--bg">
                <img className="main__image-actions" src="/assets/images/CommunityImages/CommunitySVGs/location1.svg" alt="actions"/>
                </div>
                </div>
                <h2 className="main__title-contributions">{t("Add")} <span
                className="main__title-contributions--blue">{t("Place Info")}</span>
                </h2>
                <div className="main__line"></div>
                <span className="main__description-contributions">{t("Add info about shops, points of interest, trails, public transport to OpenStreetMap")}</span>
                </div>
                <div className="main__information-window">
                <div className="main__information">
                <img className="main__image-window" src="/assets/images/CommunityImages/CommunityContainerMain/Rectangle192.png" alt="window" loading="lazy"/>
                <div className="main__image-actions--bg">
                <img className="main__image-actions" src="/assets/images/CommunityImages/CommunitySVGs/service1.svg" alt="actions"/>
                </div>
                </div>
                <h2 className="main__title-contributions">{t("Provide")} <span
                className="main__title-contributions--blue">{t("Support")}</span>
                </h2>
                <div className="main__line"></div>
                <span className="main__description-contributions">{t("Help people use the app, respond to questions on: Telegram, Instagram, Facebook, X (Twitter), Reddit, LinkedIn, Mastodon, Matrix")}</span>
                </div>
                <div className="main__information-window">
                <div className="main__information">
                <img className="main__image-window" src="/assets/images/CommunityImages/CommunityContainerMain/Rectangle229.png" alt="window" loading="lazy"/>
                <div className="main__image-actions--bg">
                <img className="main__image-actions" src="/assets/images/CommunityImages/CommunitySVGs/translation1.svg" alt="actions"/>
                </div>
                </div>
                <h2 className="main__title-contributions">{t("Translate")}</h2>
                <div className="main__line"></div>
                <span className="main__description-contributions">{t("Add and update translations in the app's interface, app stores and this website.")}</span>
                </div>
                <div className="main__information-window">
                <div className="main__information">
                <img className="main__image-window" src="/assets/images/CommunityImages/CommunityContainerMain/Rectangle226.png" alt="window" loading="lazy"/>
                <div className="main__image-actions--bg">
                <img className="main__image-actions" src="/assets/images/CommunityImages/CommunitySVGs/curve1.svg" alt="actions"/>
                </div>
                </div>
                <h2 className="main__title-contributions">{t("Design & Product Management")}</h2>
                <div className="main__line"></div>
                <span className="main__description-contributions">{t("Shape the direction of the product and the user experience")}</span>
                </div>
                <div className="main__information-window">
                <div className="main__information">
                <img className="main__image-window" src="/assets/images/CommunityImages/CommunityContainerMain/Rectangle232.png" alt="window" loading="lazy"/>
                <div className="main__image-actions--bg">
                <img className="main__image-actions" src="/assets/images/CommunityImages/CommunitySVGs/donation2.svg" alt="actions"/>
                </div>
                </div>
                <h2 className="main__title-contributions">{t("Volunteer")}</h2>
                <div className="main__line"></div>
                <span className="main__description-contributions">{t("Get involved in Engineering, Marketing, Product/Design, or Support")}</span>
                </div>
                </div>
                <div className="main__Connected">
                <h2 className="main__title--connected">{t("Stay Connected")}</h2>
                <div className="main__container--contacts-socials">
                <img className="main__social-image" src="/assets/images/CommunityImages/CommunityConnectedSVGs/instagram1.svg" alt="insta"/>
                <img className="main__social-image" src="/assets/images/CommunityImages/CommunityConnectedSVGs/Group.svg" alt="X"/>
                <img className="main__social-image" src="/assets/images/CommunityImages/CommunityConnectedSVGs/Artboard.svg" alt="telegram"/>
                <img className="main__social-image" src="/assets/images/CommunityImages/CommunityConnectedSVGs/linkedin1.svg" alt="linkedin"/>
                <img className="main__social-image" src="/assets/images/CommunityImages/CommunityConnectedSVGs/Layer_x0020_1.svg" alt="facebook"/>
                <img className="main__social-image main__social-image--m" src="/assets/images/CommunityImages/CommunityConnectedSVGs/Frame.svg" alt="frame"/>
                <img className="main__social-image" src="/assets/images/CommunityImages/CommunityConnectedSVGs/mail1.svg" alt="mail"/>
                <img className="main__social-image" src="/assets/images/CommunityImages/CommunityConnectedSVGs/Matrix_logo1.svg" alt="matrix"/>
                <img className="main__social-image" src="/assets/images/CommunityImages/CommunityConnectedSVGs/reddit.svg" alt="reddit"/>
                <img className="main__social-image" src="/assets/images/CommunityImages/CommunityConnectedSVGs/github1.svg" alt="github"/>
                </div>
                <div className="main__container--donate">
                <div className="main__donate--description">
                <h2 className="main__title--donate">{t("Donate")}</h2>
                <div className="main__line main__line--m1"></div>
                <p className="main__description--donate">{t("The app runs on your donations, help improve it")}</p>
                <Buttons children={t("Donate")} size="button button--size-sm-bluesecondheader"/>
                </div>
                <img className="main__donate--img" src="/assets/icons/globalImagesSVGs/donation2.svg" alt="donate"/>
                </div>
                </div>
                </main>
                <Footer/>
                </>
                )}