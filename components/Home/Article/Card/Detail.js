import React from 'react';
import classes from '../.././../../styles/custom/Home/Article/Card/Detail.module.scss';

export default function Detail(props) {

    return (
        <div className={classes.Wrapper}>
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <div className={classes.Image}>
                        <a href={`/article/detail/${props.article.slug}`}>
                            <img src="/invest.webp" />
                        </a>
                    </div>
                </div>
                <div className="col-md-7 col-sm-12">
                    <div className={classes.Category}>{props.article.postcat.title}</div>
                    <div className={classes.Title}>
                        <a href={`/article/detail/${props.article.slug}`}>
                            {props.article.title}
                        </a>
                    </div>
                    <div className={classes.Description}>{props.article.subtitle}</div>
                    <div className={classes.Date}><i>Expandana / 1 Desember 2020 *</i></div>
                </div>
            </div>
        </div>
    )
}
