import classes from './header.module.scss';

function Header() {
    return (
        <div className={classes.header}>
            <h1>E-Commerce</h1>
            <ul>
                <li>
                    Search
                </li>
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