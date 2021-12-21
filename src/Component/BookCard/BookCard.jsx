import styles from "./BookCard.module.scss";

let BookCard = ({ currData }) => {
    let imgDisplay;
    if (currData.imgURL !== undefined) {
        imgDisplay = (
            <img className="card-container--img" src={currData.imgURL}></img>
        );
    } else {
        imgDisplay = <p>No Image Available</p>;
    }
    return (
        <div className={styles["card-container"]}>
            {imgDisplay}
            <h3 className={styles["card-container--title"]}>
                {currData.title}
            </h3>
            <h4 className={styles["card-container--author"]}>
                {currData.author}
            </h4>
            <p className={styles["card-container--description"]}>
                {currData.description}
            </p>
        </div>
    );
};

export default BookCard;
