export default function createHandleKeyDown({showSuggestions, suggestions, highlightIndex, setHighlightIndex, chooseSuggestion, setShowSuggestions}) {

    return function handleKeyDown(e) {
        if (!showSuggestions) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlightIndex((prev) => (prev + 1) % suggestions.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlightIndex((prev) =>
                prev === 0 ? suggestions.length - 1 : prev - 1
            );
        } else if (e.key === "Enter") {
            if (highlightIndex >= 0 && suggestions[highlightIndex]) {
                const place = suggestions[highlightIndex];
                chooseSuggestion(place);
            }
        } else if (e.key === "Escape") {
            setShowSuggestions(false);
        }
    };
}