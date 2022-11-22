import classes from './search.module.scss';

function Search({ searchResult }) {

    const searchUpdate = (e) => {
        searchResult(e.target.value)
    }

    return (
        <div className={classes.search}>
            <input type='text' placeholder='Search here...' onChange={searchUpdate}/>
        </div>
    )
}

export default Search;