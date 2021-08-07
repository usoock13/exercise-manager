import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Search = ({ url }) => {
    const router = useRouter();
    console.log(router.query.keyword);
    return (
        <Layout>
            input keyword is :: "{router.query.keyword}"
        </Layout>
    )
}

export default Search;