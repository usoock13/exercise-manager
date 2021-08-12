import Layout from '../components/Layout'
import Head from 'next/head';

const Index = () => {
    return (
        <Layout>
            <style jsx>
            {`
                .title {
                    color: #121212;
                    font-size: 2.7rem;
                    font-weight: 100;
                    font-family: 'Titillium Web', sans-serif;
                    text-align: left;
                    text-transform: uppercase;
                    letter-spacing: 6rem;
                    box-sizing: border-box;
                    padding: 1.2rem 7rem;
                }
            `}
            </style>
            <Head>
                <title>Exermana</title>
            </Head>
            <h1 className="title">Exercise Manager</h1>
        </Layout>
    )
}
export default Index;