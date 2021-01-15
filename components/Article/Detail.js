import React, { useContext, useEffect } from 'react';
import { ArticleContext } from '../../context/article/article';
import classes from '../../styles/custom/article/DetailArticle.module.scss';
import Loader from '../Shared/Loader/Loader';

function Detail({router}) {
    const {
        _getDetailArticle,
        article,
        isLoadingArticle,
        isErrorArticle
    } = useContext(ArticleContext);

    useEffect(() => {
        let pathname = window.location.pathname;
        let slug = pathname.split('/').pop();
        _getDetailArticle(slug);
    }, []);

    let content = null;
    if (isErrorArticle) {
        content = 'Error';
    } else {
        if (!isLoadingArticle && article) {
            content = (
                <div className={classes.Wrapper}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className={classes.Image}>
                                    <div className={classes.Illustration}>
                                        <div className={classes.Pattern1}></div>
                                        <div className={classes.Pattern2}></div>
                                        <img src="/invest.webp"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-12 order-md-last order-sm-last order-first">
                                <div className={classes.Title}>{article.title}</div>
                                <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            content = <Loader />;
        }
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Detail;
