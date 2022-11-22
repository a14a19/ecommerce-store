import { Link } from 'react-router-dom';
import classes from './pagenotfound.module.scss';

function PageNotFound() {
    return(
        <div className={classes.pagenotfound}>
            <i class="fa-solid fa-file-circle-xmark"></i>
            Page Not Found
            <Link to='/'>Back to home</Link>
        </div>
    )
}

export default PageNotFound;
