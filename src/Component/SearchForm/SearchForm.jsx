import { useState, useContext } from "react";

let SearchForm = () => {
    const [currentSearch, setCurrentSearch] = useState("");

    console.log("Input: ", currentSearch);

    return (
        <div>
            <form>
                <input
                    type="text"
                    onInput={(e) => setCurrentSearch(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SearchForm;
