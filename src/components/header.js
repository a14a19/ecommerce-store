import classes from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';

function Header({ setSearch }) {

    return (
        <div className={classes.header}>
            <Link to='/'>
                <h1>
                    E-Commerce
                </h1>
            </Link>
            <ul>
                <li>
                    <NavLink to='/search'>
                        <i className="fa-solid fa-magnifying-glass" title='Search'></i>
                    </NavLink>
                </li>
                <li>
                    <i className="fa-solid fa-heart" title='Wishlist'></i>
                </li>
                <li>
                    <i className="fa-solid fa-cart-shopping" title='Cart'></i>
                </li>
                <li>
                    <i className="fa-solid fa-user" title='Profile'></i>
                </li>
            </ul>
        </div>
    )
}

export default Header;