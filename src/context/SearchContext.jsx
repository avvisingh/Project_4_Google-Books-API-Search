import { useState, createContext } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchedBook, setSearchedBook] = useState("");
    console.log("From within context: ", searchedBook);

    const data = { searchedBook, setSearchedBook };

    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    );
};

export default SearchProvider;
