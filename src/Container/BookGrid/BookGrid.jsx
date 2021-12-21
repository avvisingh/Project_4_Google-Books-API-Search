import BookCard from "../../Component/BookCard";
import styles from "./BookGrid.module.scss";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { fetchAPI } from "../../assets/utils/api-fetch";
import { apiInterface } from "../../assets/utils/api-interface";

let BookGrid = () => {
    let [currData, setCurrData] = useState([]);
    const context = useContext(SearchContext);

    useEffect(
        () =>
            (async () => {
                console.log("entering useEffect");
                let apiData = await fetchAPI(context.searchedBook);
                if (apiData === null) {
                    console.log("fuck you");
                    return;
                }

                let dataFormatted = apiInterface(apiData);
                console.log(dataFormatted);
                setCurrData(dataFormatted);
            })(),
        [context.searchedBook]
    );

    console.log("This is currData", currData);
    console.log("This is context's searchedBook", context.searchedBook);

    let returnVal;

    if (currData.length) {
        returnVal = currData.map((book, i) => {
            return <BookCard key={i} currData={book} />;
        });
    } else {
        returnVal = (
            <>
                <p>Nothing to Display</p>
            </>
        );
    }

    return (
        <>
            <div className={styles["book-grid"]}>{returnVal}</div>
        </>
    );
};

export default BookGrid;
