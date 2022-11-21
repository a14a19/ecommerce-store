import classes from './filter.module.scss';

function Filter({ setRange }) {

    // const changeRange = (e) => {
    //     console.log(e.target.value);
    //     setRange(e.target.value)
    // }

    return (
        <div className={classes.filter}>
            <h3>Filters</h3>
            <label htmlFor='price'>Price</label>
            <input
                type="range"
                id='price'
                min='0'
                max='2000'
                step='100'
                // onChange={() => changeRange()}
            />
            <label htmlFor='rating'>Rating</label>
            <input
                type="range"
                id='rating'
                min='0'
                max='5'
                // onChange={() => changeRange()}
            />
        </div>
    )
}

export default Filter;