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
        bookData.author = book.volumeInfo.authors[0];
        bookData.description = book.volumeInfo.description;
        bookData.title = book.volumeInfo.title;

        return bookData;
    });

    console.log(booksArray);
    return booksArray;
};
