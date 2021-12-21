export const apiInterface = (apiData) => {
    let arrayResponse = apiData.items;
    const booksArray = arrayResponse.map((book) => {
        const bookData = {};
        //image
        //author
        //description
        //title
        if (book.volumeInfo.imageLinks !== undefined) {
            bookData.imgURL = book.volumeInfo.imageLinks.thumbnail;
        } else {
            bookData.imgURL = "";
        }

        if (book.volumeInfo.authors !== undefined) {
            bookData.author = book.volumeInfo.authors[0];
        } else {
            bookData.author = "Author Information not available";
        }

        if (book.volumeInfo.description !== undefined) {
            bookData.description = book.volumeInfo.description;
        } else {
            bookData.description = "Description not available";
        }
        bookData.title = book.volumeInfo.title;

        return bookData;
    });

    console.log(booksArray);
    return booksArray;
};
