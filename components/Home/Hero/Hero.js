import React from 'react';
import classes from '../../../styles/custom/Home/Hero/Hero.module.scss';

export default function Hero(props) {
    return (
        <div className={classes.Wrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12 order-md-first order-sm-last order-last">
                        <div className={classes.Form}>
                            <div className={classes.WrapperForm}>
                                <div className={classes.Intro}>Mau cari tahu apa hari ini?</div>
                                <input className={classes.Search} type="text" placeholder="Ketik kata kunci dan cari"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12 order-md-last order-sm-first order-first">
                        <div className={classes.Image}>
                            <div className={classes.Illustration}>
                                <div className={classes.Pattern1}></div>
                                <div className={classes.Pattern2}></div>
                                <img src="/invest.webp"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
