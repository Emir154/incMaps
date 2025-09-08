import { Link } from "react-router";
import HomeHeader from '../../Components/Header/HomeHeader/HomeHeader';
import Buttons from "../../Components/Buttons/Buttons";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";
import './../../styles/main.scss'

export default function Home() {
    const { t } = useTranslation();

    return (<>
        <HomeHeader
            drawerLinks={[
                { name: t('Weather'), to: '/Weather' },
                { name: t('Community'), to: '/Community' },
            ]} />
        <main className="main">
            <section className="main__community">
                <div className="main__community--peoplemakephoto">
                    <img className="main__community--image"
                        src="/assets/images/HomeImages/mike-von-zSQY2Or5WKQ-unsplash1.png" alt="Photo" loading="lazy" />
                    <img className="main__community--image"
                        src="/assets/images/HomeImages/paul-green-gOHfFgwyDNM-unsplash3.png" alt="Photo" loading="lazy" />
                    <img className="main__community--image"
                        src="/assets/images/HomeImages/mike-von-zSQY2Or5WKQ-unsplash2.png" alt="Photo" loading="lazy" />
                    <img className="main__community--image"
                        src="/assets/images/HomeImages/mike-von-zSQY2Or5WKQ-unsplash3.png" alt="Photo" loading="lazy" />
                    <img className="main__community--image"
                        src="/assets/images/HomeImages/mike-von-zSQY2Or5WKQ-unsplash4.png" alt="Photo" loading="lazy" />
                    <img className="main__community--image"
                        src="/assets/images/HomeImages/paul-green-gOHfFgwyDNM-unsplash2.png" alt="Photo" loading="lazy" />
                    <img className="main__community--image"
                        src="/assets/images/HomeImages/paul-green-gOHfFgwyDNM-unsplash.png" alt="Photo" loading="lazy" />
                    <img className="main__community--image"
                        src="/assets/images/HomeImages/paul-green-gOHfFgwyDNM-unsplash4.png" alt="Photo" loading="lazy" />
                </div>
                <div className="main__container--button-map">
                    <img className="main__image--container--map"
                        src="/assets/images/HomeImages/logoincmap/logoinc.png" alt="Map" />
                    <Link className="main__link--container--map" to="/">IncMap</Link>
                    <Link className="main__link--container-map--m" to="/">{t("Community + Maps")}</Link>
                </div>
            </section>
            <div className="main__container--description-global">
                <section className="main__container-main">
                    <div className="main__container--description-global main__container--description">
                        <h2 className="main__title">{t("Offline Search and Route")}</h2>
                        <p className="main__description">{t("See the place you want to go while in an underground parking garage, and navigate while on a distant hike.")}</p>
                    </div>
                    <div className="main__container--image">
                        <img className="main__image-illustration--m1" src="/assets/images/HomeImages/Group1311.png"
                            alt="illustration" loading="lazy" />
                        <img className="main__image-illustration--m2"
                            src="/assets/images/HomeImages/1Astronomical%20clock.png" alt="illustration" loading="lazy" />
                        <img className="main__image-illustration--m3" src="/assets/images/HomeImages/Frame895.svg"
                            alt="illustration" loading="lazy" />
                    </div>
                </section>
                <section className="main__container-main main__container-main--m1">
                    <div className="main__container--description">
                        <h2 className="main__title main__title--m2 ">{t("No Data Collection")}</h2>
                        <p className="main__description">{t("The app is designed with privacy as a priority and does not identify people, or track information about them.")}</p>
                    </div>
                    <div className="main__container--image main__container--image-m1">
                        <img className="main__image-illustration--m1 main__image-illustration--m5" src="/assets/images/HomeImages/Group1310.png"
                            alt="illustration" loading="lazy" />
                        <img className="main__image-illustration--m2 main__image-illustration--m4"
                            src="/assets/images/HomeImages/OMgDriving.png" alt="illustration" loading="lazy" />
                        <img className="main__image-illustration--m3 main__image-illustration--m6" src="/assets/images/HomeImages/Frame130.svg"
                            alt="illustration" loading="lazy" />
                    </div>
                </section>
                <section className="main__container-main">
                    <div className="main__container--description">
                        <h2 className="main__title main__title--m3">{t("Save Your Battery")}</h2>
                        <p className="main__description">{t("Efficiently uses your battery, doesn’t drain your battery like other navigation apps")}</p>
                    </div>
                    <div className="main__container--image">
                        <img className="main__image-illustration--m1 main__image-illustration--m7" src="/assets/images/HomeImages/OsWalking.png"
                            alt="illustration" loading="lazy" />
                        <img className="main__image-illustration--m2 main__image-illustration--m8"
                            src="/assets/images/HomeImages/using-mobile-phone-in-the-nature-2021-08-28-23-39-02-utc1.png" alt="illustration" loading="lazy" />
                        <img className="main__image-illustration--m3 main__image-illustration--m9" src="/assets/images/HomeImages/Frame22.svg"
                            alt="illustration" loading="lazy" />
                    </div>
                </section>
                <section className="main__container-main main__container-main--m1">
                    <div className="main__container--description">
                        <h2 className="main__title main__title--m2 ">{t("Free and Built by the Community")}</h2>
                        <p className="main__description">{t("to the")} <Link to="https://www.google.com/maps"><img className="main__image-icon" src="/assets/images/HomeImages/svgIconsText/Logo.svg" alt="icon" /></Link> {t("People like you helped build the app by adding locations  OpenStreetMap, giving feedback on features, and contributing code on")} <Link to="https://github.com/Emir154"><img className="main__image-icon" src="/assets/images/HomeImages/svgIconsText/github.svg" alt="icon" /></Link> GitHub</p>
                    </div>
                    <div className="main__container--image main__container--image-m1">
                        <img className="main__image-illustration--m1 main__image-illustration--m10" src="/assets/images/HomeImages/Astronomical%20clock12.png"
                            alt="illustration" loading="lazy" />
                        <img className="main__image-illustration--m2 main__image-illustration--m11"
                            src="/assets/images/HomeImages/multiethnic-couple-using-mobile.png" alt="illustration" loading="lazy" />
                        <img className="main__image-illustration--m3 main__image-illustration--m12" src="/assets/images/HomeImages/Frame88.svg"
                            alt="illustration" loading="lazy" />
                    </div>
                </section>


            </div>
            <section className="main__container--description-global main__freedom-container">
                <div className="main__container--description main__freedom-description">
                    <h2 className="main__title main__title--m4 ">
                        {t("Freedom Is Here")}
                    </h2>
                    <p className="main__description main__description--m1">
                        {t("Discover your journey, navigate the world with privacy and community at the forefront.")}
                    </p>
                    <Buttons href="/Weather" size="button button--size-m" children={t("Download")} />
                </div>
                <img className="main__image-illustration-last" src="/assets/images/HomeImages/Astronomical%20clock.png" alt="field" loading="lazy" />
            </section>
        </main>
        <Footer />
    </>
    )
}