import React, { useContext, useEffect } from 'react';
import Detail from './Card/Detail';
import classes from '../../../styles/custom/Home/Article/Article.module.scss';
import { ArticleContext } from '../../../context/article/article';
import ContentLoader from 'react-content-loader';
import Loader from '../../../components/Shared/Loader/Loader';

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
            content = [<MyLoader />, <MyLoader />, <MyLoader />];
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

const MyLoader = (props) => (
    <ContentLoader 
        speed={2}
        width={400}
        height={300}
        // viewBox="0 0 400 400"
        backgroundColor="#e0e0e0"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="4" y="-265" rx="2" ry="2" width="400" height="400" /> 
        <rect x="4" y="142" rx="0" ry="0" width="58" height="12" /> 
        <rect x="19" y="149" rx="0" ry="0" width="6" height="1" /> 
        <rect x="25" y="150" rx="0" ry="0" width="8" height="1" /> 
        <rect x="4" y="162" rx="0" ry="0" width="255" height="12" /> 
        <rect x="6" y="173" rx="0" ry="0" width="4" height="0" /> 
        <rect x="4" y="181" rx="0" ry="0" width="108" height="10" />
    </ContentLoader>
)