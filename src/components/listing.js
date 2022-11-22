import { useState } from 'react';
import classes from './listing.module.scss';

function Listing({ data, select }) {

    let [page, setPage] = useState(1)

    const totalPage = Math.ceil(data.length / 12)

    const updatePage = (value) => {
        setPage(page + value)
    }

    const cardDetail = data.map((item, i) => {

        const firstColor = ((item.rating / 5.00) * 100)
        const secondColor = 100 - firstColor;

        const finalPrice = (item.price - ((item.discountPercentage * item.price) / 100)).toFixed(2);

        return ((i >= 12 * (page - 1) && i < (12 * page)) &&
            <div key={item.id} className={classes.card}>
                <div className={classes.imgContainer}>
                    <img src={item.images[0]} alt='...' />
                </div>
                <div className={classes.textContainer}>
                    <div className={classes.nameContainer}>
                        <div className={classes.title} title={item.title}>{item.title}</div>
                        <div className={classes.category}>{item.category}</div>
                    </div>
                    <div className={classes.description} title={item.description}>{item.description}</div>
                    <div className={classes.priceContainer}>
                        <span className={classes.finalPrice}>
                            <span>&#8377;</span>
                            {finalPrice}
                        </span>
                        <span className={classes.mainPrice}>&#8377;{item.price}</span>
                        <span className={classes.discount}>({item.discountPercentage}% off)</span>
                    </div>
                    <div style={{ color: item.stock > 50 ? `green` : `red` }} className={classes.stock}>{item.stock > 50 ? `In Stock` : `Low Stock`}</div>
                </div>
                <div className={classes.ratingMain} title={item.rating}>
                    <div style={{ background: `linear-gradient(to right, orange ${firstColor}%, black ${secondColor}%)`, WebkitBackgroundClip: `text` }} className={classes.ratingContainer}>
                        <i className={`${classes.icon} fa-solid fa-star`}></i>
                        <i className={`${classes.icon} fa-solid fa-star`}></i>
                        <i className={`${classes.icon} fa-solid fa-star`}></i>
                        <i className={`${classes.icon} fa-solid fa-star`}></i>
                        <i className={`${classes.icon} fa-solid fa-star`}></i>
                    </div>
                </div>
                <div className={classes.wishlist} title='Add to Wishlist'>
                    <i className="fa-solid fa-heart"></i>
                </div>
            </div>
        )
    })

    return (
        <div className={classes.listing}>
            <h2>
                {select}
            </h2>
            <div className={classes.cardContainer}>
                {cardDetail}
            </div>
            <div className={classes.pages}>
                <button
                    disabled={page === 1}
                    onClick={() => updatePage(-1)}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                {page} out of {totalPage} pages
                <button
                    disabled={page === 3}
                    onClick={() => updatePage(1)}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Listing;