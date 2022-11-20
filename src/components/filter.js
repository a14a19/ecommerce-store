import classes from './filter.module.scss';

function Filter() {
    return (
        <div className={classes.filter}>
            <h3>Filters</h3>
            <input type="range"/>
            <input type="range"/>
        </div>
    )
}

export default Filter;