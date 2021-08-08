import Link from 'next/link';
import Layout from '../components/Layout'
import Head from 'next/head';
import styled, { css } from 'styled-components';

const Title = styled.h1`
    color: #fff;
    background-color: #232323;
`;

const Index = () => (
    <html>
        <Head>
            <title>운동 관리자</title>
        </Head>
        <Layout>
            <Title className="title">운동 관리자</Title>
        </Layout>
    </html>
)

export default Index;