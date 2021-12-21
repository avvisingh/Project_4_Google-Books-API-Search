let BookCard = ({currData}) => {
    return (
        <div>
            <p>{currData.imgURL ? currData.imgURL : "no image available"}</p>
            <h3>{currData.title}</h3>
            <h4>{currData.author}</h4>
            <p>{currData.description}</p>
        </div>
    );
};

export default BookCard;
