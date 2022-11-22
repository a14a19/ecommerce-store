import { NavLink, Link } from 'react-router-dom';
import classes from './footer.module.scss';

function Footer() {
    return (
        <footer className={classes.footer}>
            <NavLink to='/about' className={classes.aboutpage}>About</NavLink>
            &copy;
            <Link to=''>
                Anas Ahmed
            </Link>
        </footer>
    )
}

export default Footer;