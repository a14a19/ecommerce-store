import classes from './listing.module.scss';

function Listing({ data }) {

    const cardDetail = data.map((item, i) => {

        const firstColor = ((item.rating / 5.00) * 100)
        const secondColor = 100 - firstColor;

        return (
            <div key={i} className={classes.card}>
                <div>
                    <img src={item.images[0]} alt='...' />
                </div>
                <div>
                    <div>{item.title}</div>
                    <div>{item.category}</div>
                </div>
                <div>{item.description}</div>
                <div>&#8377;{item.price}</div>
                <div>
                    <div style={{ background: `linear-gradient(to right, orange ${firstColor}%, black ${secondColor}%)`, WebkitBackgroundClip: `text` }} className={classes.ratingContainer}>
                        <i className={`${classes.icon} fa-solid fa-star`}></i>
                        <i className={`${classes.icon} fa-solid fa-star`}></i>
                        <i className={`${classes.icon} fa-solid fa-star`}></i>
                        <i className={`${classes.icon} fa-solid fa-star`}></i>
                        <i className={`${classes.icon} fa-solid fa-star`}></i>
                    </div>
                    {item.rating}
                </div>
                <div style={{ color: item.stock > 50 ? `green` : `red` }}>{item.stock > 50 ? `In Stock` : `Low Stock`}</div>
            </div>
        )
    })
    return (
        <div className={classes.listing}>
            <h1>
                Products
            </h1>
            <div className={classes.cardContainer}>
                {cardDetail}
            </div>
        </div>
    )
}

export default Listing;