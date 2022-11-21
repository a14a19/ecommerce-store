import classes from './filter.module.scss';

function Filter({ range, setRange, rating, setRating }) {

    const changeRange = (e) => {
        console.log(range);
        setRange(e.target.value)
    }

    const changeRating = (e) => {
        setRating(e.target.value)
    }

    return (
        <div className={classes.filter}>
            <h3>Filters</h3>
            <label>Price : {range} </label>
            <input
                type="range"
                min='0'
                max='2000'
                step='100'
                onChange={changeRange}
            />
            <label htmlFor='rating'>Rating : {rating} </label>
            <input
                type="range"
                id='rating'
                min='0'
                max='5'
                onChange={changeRating}
            />
        </div>
    )
}

export default Filter;