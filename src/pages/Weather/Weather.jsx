import SecondTypeHeader from "../../components/Header/SecondTypeHeader/SecondTypeHeader";
import {useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';
import weatherTranslate from "../../Data/Weather/WeatherTranslate";
import createHandleKeyDown from "../../Data/Weather/WeatherHandleKeys";
import Footer from "../../components/Footer/Footer";
import "./../../styles/main.scss";

export default function Weather() {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    const ssk = process.env.REACT_APP_SSK;
    const [lat, setLat] = useState(50.4501);
    const [lon, setLon] = useState(30.5234);

    const chooseSuggestion = (place) => {
        const name = `${place.name}, ${place.country}`;
        const lat = place.lat;
        const lon = place.lon;

        setLat(lat);
        setLon(lon);
        setIsManualSelection(true);
        setQuery(name);
        setLocationName(name);

        localStorage.setItem("weatherLocation", JSON.stringify({name, lat, lon}));

        setSuggestions([]);
        setShowSuggestions(false);
        setHighlightIndex(-1);
    };

    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const [locationName, setLocationName] = useState("")

    // from file WeatherHandleKeys.js
    const handleKeyDown = createHandleKeyDown({
        showSuggestions,
        suggestions,
        highlightIndex,
        setHighlightIndex,
        chooseSuggestion,
        setShowSuggestions
    });

// група для weather
    const grouped = {};
    items.forEach(item => {
        const date = item.dt_txt.split(" ")[0];

        if (!grouped[date]) grouped[date] = [];

        grouped[date].push(item);
    });

    const dailyForecast = {};

    for (const [date, dayItems] of Object.entries(grouped)) {
        const closestToNoon = dayItems.reduce((prev, current) => {
            const prevHour = +prev.dt_txt.split(" ")[1].split(":")[0];
            const currentHour = +current.dt_txt.split(" ")[1].split(":")[0];
            return Math.abs(currentHour - 12) < Math.abs(prevHour - 12) ? current : prev;
        });
        const temps = dayItems.map(i => i.main.temp);
        dailyForecast[date] = {
            ...closestToNoon,
            temp_max: Math.max(...temps),
            temp_min: Math.min(...temps),
        };
    }


    const [isInitialLoad, setIsInitialLoad] = useState(true);
    useEffect(() => {
        const stored = localStorage.getItem("weatherLocation");
        if (stored) {
            const {name, lat, lon } = JSON.parse (stored);
            setLocationName(name);
            setLat(lat);
            setLon(lon);
        }
        setIsInitialLoad(false);
    }, [])


    const [isManualSelection, setIsManualSelection] = useState(false);

    useEffect(() => {

        if (isManualSelection) {
       setIsManualSelection(false);

       return;}

        const delayDebounce = setTimeout(() => {

            if (query.length < 2) return;

            fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${ssk}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setSuggestions(data);
                    setShowSuggestions(true);
                })
                .catch((err) => console.error("Autocomplete error:", err));
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [query]);

    // геолокація і погода useEffect 3
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            },
            (error) => {
                console.log("Помилка геолокації", error);
            }
        );
    }, []);

    // Погода по координатам  useEffect 4
    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${ssk}`
        )
            .then((res) => res.json())
            .then((result) => {
                setItems(result.list);
                setIsLoaded(true);
            })
            .catch((err) => {
                console.error("Помилка погоди", err);
            });
    }, [lat, lon]);

    const [selectedDay, setSelectedDay] = useState(null);
    return (
        <>
            <SecondTypeHeader
                links={[
                    {name: t("Home"), to: "/"},
                    {name: t("Community"), to: "/Community"},
                ]}
                breadcrumbs={[
                    {name: t("Home"), path: "/"},
                    {name: t("Weather"), path: "/Weather"},
                ]}
                drawerLinks={[
                    {name: t('Home' ), to: '/'},
                    {name: t('Community' ), to: '/Community'},
                ]}
                title={t("Weather forecast openWeatherMap")}
            />
            <main className="weather">
                <div className="weather__container">
                    <div className="weather__wrapper-search" style={{position: "relative"}}>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="weather__input-search"
                            type="text"
                            placeholder="City, village, etc..."/>
                        <button className="weather__button"><img src="/assets/icons/iconsWeatherForecast/download.svg" alt="search"/></button>
                        {showSuggestions &&  suggestions.length > 0 && (
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
                                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description}/>
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
         <Footer/>
        </>
    );
}
