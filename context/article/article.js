import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ArticleContext = createContext();

export const ArticleContainer = ({children}) => {
    const [articles, setArticles] = useState([]);
    const [isLoadingArticles, setIsLoadingArticles] = useState(false);
    const [isErrorArticles, setIsErrorArticles] = useState(false);

    const [article, setArticle] = useState(null);
    const [isLoadingArticle, setisLoadingArticle] = useState(false);
    const [isErrorArticle, setIsErrorArticle] = useState(false);

    const _getArticles = () => {
        setIsLoadingArticles(true);
        axios.get('https://demo3418193.mockable.io/getArticles')
            .then((response) => {
                if (response.status === 200) {
                    setIsLoadingArticles(false);
                    setArticles(response.data.data);
                }
            })
            .catch((error) => {
                setIsErrorArticles(true);
                setIsLoadingArticles(false);
            })
    }

    const _getDetailArticle = (slug) => {
        setisLoadingArticle(true);
        axios.get('https://demo3418193.mockable.io/getArticles')
            .then((response) => {
                if (response.status === 200) {
                    setisLoadingArticle(false);
                    let data = response.data.data.filter((item) => item.slug === slug);
                    console.log('data', data[0])
                    setArticle(data[0]);
                }
            })
            .catch((error) => {
                setisLoadingArticle(false);
                console.log('error', error)
            })
    }

    const articleValue = {
        articles,
        isLoadingArticles,
        isErrorArticles,

        article,
        isLoadingArticle,
        isErrorArticle,

        _getArticles,
        _getDetailArticle
    }

    return (
        <ArticleContext.Provider value={articleValue}>
            {children}
        </ArticleContext.Provider>
    )
}
