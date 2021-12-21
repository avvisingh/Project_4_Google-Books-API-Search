let BookCard = ({ currData }) => {
    let imgDisplay;
    if (currData.imgURL !== undefined) {
        imgDisplay = <img src={currData.imgURL}></img>;
    } else {
        imgDisplay = <p>No Image Available</p>;
    }
    return (
        <div className="card-container">
            {imgDisplay}
            <h3>{currData.title}</h3>
            <h4>{currData.author}</h4>
            <p>{currData.description}</p>
        </div>
    );
};

export default BookCard;
