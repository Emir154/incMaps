import { useState, useEffect } from "react";
import createHandleKeyDown from "../../Data/Weather/WeatherHandleKeys";

export function WeatherSuggestionsSettings() {
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

        localStorage.setItem("weatherLocation", JSON.stringify({ name, lat, lon }));

        setSuggestions([]);
        setShowSuggestions(false);
        setHighlightIndex(-1);
    };

    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const [showSuggestions, setShowSuggestions] = useState(false);


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

    const [items, setItems] = useState([]);
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
            const { name, lat, lon } = JSON.parse(stored);
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

            return;
        }

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

    return {
        setQuery, handleKeyDown, chooseSuggestion,
        showSuggestions, suggestions, highlightIndex, locationName,
        query, selectedDay, setSelectedDay, dailyForecast, items
    }

};