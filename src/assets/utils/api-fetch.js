export const fetchAPI = async (search) => {
    const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;

    let response = await fetch(BASE_URL + search);

    if (response.status !== 200) return null;

    let JSONresponse = await response.json();
    console.log(JSONresponse);
    return JSONresponse;
};
