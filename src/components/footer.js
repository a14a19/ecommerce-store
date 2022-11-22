import { NavLink } from 'react-router-dom';
import classes from './footer.module.scss';

function Footer() {
    return (
        <footer className={classes.footer}>
                <NavLink to='/about'>About</NavLink>
                &copy; Anas Ahmed 
        </footer>
    )
}

export default Footer;