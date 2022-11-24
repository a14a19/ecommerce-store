import { useState } from 'react';
import classes from './filter.module.scss';

function Filter({  option, setChange, change, changeActive }) {

    const [check, setCheck] = useState();
    const [isActive, setActive] = useState(false)

    const changeFn = (key, value) => {
        setChange({ ...change, [key]: value })
        if(check){
            changeActive({ ...change, [key]: value })
        }
    }

    const checkBox = (e) => {
        setCheck(e.target.checked)
    }
    const clicking = (e) => {
        e.preventDefault()
        setActive(!isActive)
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
                    <label className={classes.filterName}>
                        <sup>*</sup>
                        Category
                    </label>
                    <select onChange={(e) => changeFn('category', e.target.value)}>
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
                    <label className={classes.filterName}>
                        <sup>*</sup>
                        Price : {change.price}
                    </label>
                    <input
                        type="range"
                        min='0'
                        max='2000'
                        onChange={(e) => changeFn('price', e.target.value)}
                    />
                </li>
                <li>
                    <label className={classes.filterName}>
                        <sup>*</sup>
                        Rating : {change.rating}
                    </label>
                    <input
                        type="range"
                        min='0'
                        max='5'
                        onChange={(e) => changeFn('rating', e.target.value)}
                    />
                </li>
            </ul>
        </form>
    )
}

export default Filter;