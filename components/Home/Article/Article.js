import React, { useContext, useEffect } from 'react';
import Detail from './Card/Detail';
import classes from '../../../styles/custom/Home/Article/Article.module.scss';
import { ArticleContext } from '../../../context/article/article';

export default function Article() {
    const {
        _getArticles,
        articles,
        isLoadingArticles,
        isErrorArticles,
    } = useContext(ArticleContext);

    useEffect(() => {
        _getArticles();
    }, []);

    let content = null;
    if (isErrorArticles) {
        content = 'Error';
    } else {
        if (!isLoadingArticles && articles.length > 0) {
            content = articles.map((item, index) => {
                return (
                    <Detail key={index} article={item}/>
                )
            })
        } else {
            content = 'Loading...';
        }
    }

    return (
        <div className={classes.Wrapper}>
            <div className={classes.HeadSection}>
                <div className={classes.Title}>Latest Articles</div>
                <div className={classes.SeeMore}>See More</div>
            </div>
            {content}
        </div>
    )
}
