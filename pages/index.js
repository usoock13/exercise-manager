import Link from 'next/link';
import Layout from '../components/Layout'
import Head from 'next/head';

const Index = () => {
    return (
        <Layout>
            <style jsx>
            {`
                .title {
                    color: #121212;
                    font-size: 4.5rem;
                    font-weight: 100;
                    font-family: 'Titillium Web', sans-serif;
                    text-transform: uppercase;
                    letter-spacing: 6rem;
                }
            `}
            </style>
            <Head>
                <title>Exercise Manager</title>
            </Head>
                <h1 className="title">Exercise Manager</h1>
        </Layout>
    )
}
export default Index;