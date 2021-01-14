import React from 'react';
import Head from 'next/head';
import Header from '../../../components/Shared/Header/Header';
import Detail from '../../../components/Article/Detail';
import { ArticleContainer } from '../../../context/article/article';
import { useRouter } from 'next/router';

function ArticleDetail(props) {
    let router = useRouter();
    return (
        <div>
            <ArticleContainer>
                <Head>
                    <title>Detail Article</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <Detail router={router}/>
            </ArticleContainer>
        </div>
    )
}

export default ArticleDetail;
