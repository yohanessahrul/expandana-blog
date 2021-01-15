import React from 'react';
import classes from '../../../styles/custom/Home/Article/Article.module.scss';

const Loader = () => {
    return (
        <div className={classes.WrapperLoader}>
            <div className={classes.loader}>
                <svg className={classes.circular} viewBox="25 25 50 50">
                    <circle className={classes.path} cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
                </svg>
            </div>
        </div>
    )
}

export default Loader;