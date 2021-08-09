import Link from 'next/link';
import Layout from '../components/Layout'
import Head from 'next/head';

const Index = () => (
    <html>
        <style jsx>
        {`
            html, body {
                width: 100%;
                height: 100%;
                color: #fff;
                background-color: #121212;
            }
        `}
        </style>
        <Head>
            <title>Exercise Manager</title>
        </Head>
        <Layout>
            <h1 className="title" style={{ fontSize: "5.5rem", fontFamily: "'Roboto', sans-serif" }}>Exercise Manager</h1>
        </Layout>
    </html>
)

export default Index;