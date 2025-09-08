import SecondTypeHeader from "../../Components/Header/SecondTypeHeader/SecondTypeHeader";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from 'react-i18next';
import { WeatherSuggestionsSettings } from "../../Data/Weather/WeatherSuggestions";
import weatherTranslate from "../../Data/Weather/WeatherTranslate";
import "./../../styles/main.scss";

export default function Weather() {
    const { t } = useTranslation();

    const { setQuery, handleKeyDown, chooseSuggestion,
        showSuggestions, suggestions, highlightIndex, locationName,
        query, selectedDay, setSelectedDay, dailyForecast, items } = WeatherSuggestionsSettings();


    return (
        <>
            <SecondTypeHeader
                links={[
                    { name: t("Home"), to: "/" },
                    { name: t("Community"), to: "/Community" },
                ]}
                breadcrumbs={[
                    { name: t("Home"), path: "/" },
                    { name: t("Weather"), path: "/Weather" },
                ]}
                drawerLinks={[
                    { name: t('Home'), to: '/' },
                    { name: t('Community'), to: '/Community' },
                ]}
                title={t("Weather forecast openWeatherMap")}
            />
            <main className="weather">
                <div className="weather__container">
                    <div className="weather__wrapper-search" style={{ position: "relative" }}>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="weather__input-search"
                            type="text"
                            placeholder="City, village, etc..." />
                        <button className="weather__button"><img src="/assets/icons/iconsWeatherForecast/download.svg" alt="search" /></button>
                        {showSuggestions && suggestions.length > 0 && (
                            <ul className="suggestions" role="listbox">
                                {suggestions.map((place, index) => (
                                    <li
                                        key={index}
                                        role="option"
                                        aria-selected={highlightIndex === index}
                                        className={
                                            highlightIndex === index ? "highlighted" : ""
                                        }
                                        onClick={() => chooseSuggestion(place)}
                                    >
                                        {place.name}, {place.state || ""} ({place.country})
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                {locationName && (
                    <h2 className="weather__location-tile"><span className="weather__location-tile weather__tile--m">Погода</span> у {locationName}</h2>
                )}
                <div className="weather__container-days">
                    {Object.entries(dailyForecast).map(([date, item], index) => {
                        const dayName = new Date(date).toLocaleDateString("uk-UA", { weekday: "long", day: "numeric", month: "long" });


                        return (
                            <div className="weather__day-grid">
                                <div onClick={() => setSelectedDay(date)} key={index} className="weather__day">
                                    <h3 className="weather__title">{dayName.charAt(0).toUpperCase() + dayName.slice(1)}</h3>
                                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
                                    <div className="weather__day-item--temp">
                                        <span className="weather__title">Макс. {Math.round(item.temp_max)}°C</span>
                                        <span className="weather__title">Мін. {Math.round(item.temp_min)}°C</span>
                                    </div>
                                    <span className="weather__title">{weatherTranslate[item.weather[0].description] || item.weather[0].description}</span>
                                </div>
                            </div>
                        );
                    })}
                    {selectedDay && (
                        <div className="weather__container--title-text-align-days">
                            <h3 className="weather__title weather__title--m3">Прогноз погоди на {new Date(selectedDay).toLocaleDateString("uk-UA", { weekday: "long", day: "numeric", month: "long" })}</h3>
                            <div className="weather__container-days">
                                <div className="weather__day-grid">
                                    {items
                                        .filter((item) => item.dt_txt.startsWith(selectedDay))
                                        .map((item, idx) => (
                                            <div key={idx} className="weather__day weather__day--not-cursorpointer">
                                                <span className="weather__title">О {new Date(item.dt * 1000).toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit" })} годині</span>
                                                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
                                                <span className="weather__title weather__title--m2">{Math.round(item.main.temp)}°C</span>
                                                <span className="weather__title  weather__title--m2">{weatherTranslate[item.weather[0].description] || item.weather[0].description}</span>
                                                <span className="weather__title weather__title--m2">Вітер {Math.round(item.wind.speed)} м/с</span>
                                                <span className="weather__title weather__title--m2">Тиск {Math.round(item.main.pressure)} мм</span>
                                                <span className="weather__title weather__title--m2">Видимість {Math.round(item.visibility)} м</span>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
