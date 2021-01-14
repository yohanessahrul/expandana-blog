import Head from 'next/head';
import Hero from '../components/Home/Hero/Hero';
import Article from '../components/Home/Article/Article';
import Header from '../components/Shared/Header/Header';
import { ArticleContainer } from '../context/article/article';

export default function Home() {
	return (
        <div>
            <ArticleContainer>
                <Head>
                    <title>Expandana</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <Hero />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Article />
                        </div>
                        <div className="col-md-4">
                            {/* Incididunt voluptate esse enim pariatur id consequat deserunt aliquip. */}
                        </div>
                    </div>
                </div>
            </ArticleContainer>
        </div>
	);
}
