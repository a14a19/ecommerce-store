import { useState } from 'react';
import classes from './filter.module.scss';

function Filter({ range, rating, option, selectActive, rangeActive, ratingActive }) {

    const [check, setCheck] = useState();
    const [isActive, setActive] = useState(false)

    const changeRange = (e) => {
        if (check) {
            rangeActive(e.target.value)
        }
    }
    const selectFnOpt = (e) => {
        if (check) {
            selectActive(e.target.value)
        }
    }
    const changeRating = (e) => {
        if (check) {
            ratingActive(e.target.value)
        }
    }
    const checkBox = (e) => {
        setCheck(e.target.checked)
    }
    const clicking = (e) => {
        e.preventDefault()
        setActive(!isActive)
        console.log(isActive);
    }

    return (
        <form className={classes.filter}>
            <h3>
                Filters
                <input type='checkbox' onChange={checkBox} />
            </h3>
            <button onClick={clicking}>
                <i className="fa-solid fa-angle-down"></i>
            </button>
            <ul className={isActive === true ? classes.active : classes.inactive}>
                <li>
                    <label className={classes.filterName}>Category</label>
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
                </li>
                <li>
                    <label className={classes.filterName}>Price : {range} </label>
                    <input
                        type="range"
                        min='0'
                        max='2000'
                        step='100'
                        onChange={changeRange}
                    />
                </li>
                <li>
                    <label className={classes.filterName}>Rating : {rating} </label>
                    <input
                        type="range"
                        id='rating'
                        min='0'
                        max='5'
                        onChange={changeRating}
                    />
                </li>
            </ul>
        </form>
    )
}

export default Filter;