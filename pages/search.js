import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

// const Search = ({ url }) => {
//     return (
//         <Layout>
//             <SSRTest />
//         </Layout>
//     )
// }

class Search extends React.Component {
    static async getInitialProps ({ req }) {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            res.blob();
        })
        .then(blob => {
            console.log(blob);
        });

        return req ? { from : "server" } : { from : "client" };
    }
    render() {
        return (
            <Layout>
                {this.props.from}측 실행
            </Layout>
        )
    }
}

export default Search;