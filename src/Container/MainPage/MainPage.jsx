import SearchForm from "../../Component/SearchForm";
import SearchProvider from "../../context/SearchContext";
import BookGrid from "../BookGrid";

let MainPage = () => {
    return (
        <div>
            <SearchProvider>
                <SearchForm />
                <BookGrid />
            </SearchProvider>
        </div>
    );
};

export default MainPage;
