import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Item = ({ children }) => {
    return(
        <li>
            name : {children.name} || username : {children.username} || email : {children.email}
        </li>
    );
}

class Search extends React.Component {
    static async getInitialProps ({ req }) {
        
        let userlist = new Array();

        await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.json();
        })
        .then(json => {
            json.forEach(item => {
                userlist.push(<Item>{item}</Item>)
            })
        })

        return { users : userlist };
    }
    render() {
        return (
            <Layout>
                {this.props.users}
            </Layout>
        )
    }
}

export default Search;