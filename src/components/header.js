import classes from './header.module.scss';

function Header({ setSearch }) {

    const inputSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className={classes.header}>
            <h1>E-Commerce</h1>
            <div>
                <input 
                    className={classes.searchInput}
                    onChange={inputSearch}
                />
                <select> 
                    <option>All</option>
                    <option>smartphones</option>
                    <option>laptops</option>
                    <option>fragrances</option>
                    <option>skincare</option>
                    <option>groceries</option>
                    <option>home-decoration</option>
                </select>
            </div>
            <ul>
                <li>
                    WishList
                </li>
                <li>
                    Cart
                </li>
                <li>
                    Profile
                </li>
            </ul>
        </div>
    )
}

export default Header;