import classes from './header.module.scss';

import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {

    const [isActive, setActive] = useState(false)

    const clickMenu = (e) => {
        e.preventDefault()
        setActive(!isActive)
    }

    return (
        <header className={classes.header}>
            <Link to='/'>
                <h1>
                    E-Commerce
                </h1>
            </Link>
            <button onClick={clickMenu}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <ul className={ isActive === true ? classes.active : classes.inactive }>
                <li>
                    <NavLink to='/search'>
                        <i className="fa-solid fa-magnifying-glass" title='Search'></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/wishlist'>
                        <i className="fa-solid fa-heart" title='Wishlist'></i>
                    </NavLink>
                </li>
                <li>
                    <i className="fa-solid fa-cart-shopping" title='Cart'></i>
                </li>
                <li>
                    <i className="fa-solid fa-user" title='Profile'></i>
                </li>
            </ul>
        </header>
    )
}

export default Header;