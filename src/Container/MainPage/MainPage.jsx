import SearchForm from "../../Component/SearchForm";
import BookCard from "../../Component/BookCard";

let MainPage = () => {
    return (
        <div>
            {/* <SearchProvider> */}
            <SearchForm />
            <BookCard />
            {/* </SearchProvider> */}
        </div>
    );
};

export default MainPage;
