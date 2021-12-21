import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import Button from "../Button";

let SearchForm = () => {
    const [currentSearch, setCurrentSearch] = useState("");
    const searchContext = useContext(SearchContext);

    console.log("Input: ", currentSearch);

    return (
        <div>
            <input
                type="text"
                value={currentSearch}
                onInput={(e) => setCurrentSearch(e.target.value)}
            />
            <Button
                clickHandler={() => {
                    console.log("Sending up currentSearch", currentSearch);
                    searchContext.setSearchedBook(currentSearch);
                    setCurrentSearch("");
                }}
                label="Search"
            />
        </div>
    );
};

export default SearchForm;
