import classes from './filter.module.scss';

function Filter({ range, rating, option, selectActive, rangeActive, ratingActive }) {

    const changeRange = (e) => {
        rangeActive(e.target.value)
    }

    const changeRating = (e) => {
        ratingActive(e.target.value)
    }

    const selectFnOpt = (e) => {
        selectActive(e.target.value)
    }

    return (
        <div className={classes.filter}>
            <h3>Filters</h3>
            <label>Category</label>
            <select onChange={selectFnOpt}>
                {
                    Object.keys(option).map(function (key, i) {
                        return (
                            <option key={i}>
                                {option[key]}
                            </option>
                        )
                    })
                }
            </select>
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