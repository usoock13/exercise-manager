import Layout from '../components/Layout'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { connect } from "react-redux";
import Counter from '../components/Counter';

const CounterListItem = ({ setIsActiveCounter, data }) => {
    let itemStyle = {
        color: '#494949',
        fontSize: '1.5rem',
        backgroundColor: 'rgba(77, 81, 211, .09)',
        borderRadius: '1rem 1rem 0 0 ',
        cursor: 'pointer',
        userSelect: 'none',
    }
    let counters = [];
    data.counterArray.map((item, index) => {
        index >= data.counterArray.length-1 ? counters.push(`${item}`) : counters.push(`${item}, `)
    })
    let ActiveThisCounter = () => {
        setIsActiveCounter(true);
    }

    return(
        <li className="counter_itembox" style={itemStyle} onClick={ActiveThisCounter}>
            <h5 style={{ fontSize: "2.3rem" }}>{data.name}</h5>
            <div className="counter_thumbnail">
                <p style={{ fontSize: "1.5rem", fontWeight: 300 }}> {counters} </p>
            </div>
        </li>
    );
}

let dummyData = [
    {
        id: 35,
        name: "20 매칭 카운터",
        counterArray: [19, 1, 18, 2, 17, 3, 16, 4, 15, 5, 14, 6, 13, 7, 12, 8, 11, 9, 10],
        orderReverse: false,
    },
    {
        id: 36,
        name: "12회 3세트",
        counterArray: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        orderReverse: false,
    },
    {
        id: 37,
        name: "20 매칭 카운터",
        counterArray: [19, 1, 18, 2, 17, 3, 16, 4, 15, 5, 14, 6, 13, 7, 12, 8, 11, 9, 10],
        orderReverse: false,
    },
    {
        id: 38,
        name: "12회 3세트",
        counterArray: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        orderReverse: false,
    },
    {
        id: 39,
        name: "20 매칭 카운터",
        counterArray: [19, 1, 18, 2, 17, 3, 16, 4, 15, 5, 14, 6, 13, 7, 12, 8, 11, 9, 10],
        orderReverse: false,
    },
    {
        id: 40,
        name: "12회 3세트",
        counterArray: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        orderReverse: false,
    }
];

const CounterPage = (props) => {
    const [isActivingCounter, setIsActiveCounter] = useState(0);
    console.dir(props.pageProps);
    let listStyle = {
        transition: 'grid-template-columns',
        display: 'grid',
        // width: "100%",
        height: "100%",
        padding: '3rem 8rem',
        flexGrow: 1,
        flexBasis: 0,
        boxSizing: 'border-box',
    }
    let notCountingStyle = {
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridGap: '2%'
    }
    let isCountingStyle = {
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        gridGap: '1%'
    }
    let itemlist = [];
    dummyData.forEach(item => {
        itemlist.push(
            <CounterListItem
                key={item.id} 
                data={item} 
                setIsActiveCounter={setIsActiveCounter}
            />
        )
    })

    const counterListStyle = {
        ...listStyle,
        ...(isActivingCounter ? isCountingStyle : notCountingStyle)
    }

    const simpleCounterList = <ul className="simple_counter_list" 
                                style={counterListStyle}>
                                        {itemlist}
                            </ul>
    const popupCounter = <Counter 
                            setIsActiveCounter={setIsActiveCounter} 
                            isActivingCounter={isActivingCounter} 
                        />

    return (
        <Layout>
            <div className="counter_page_wrap" style={{ display: 'flex', height: "100%" }}>
                <style jsx>
                {`

                `}
                </style>
                {popupCounter}
                <Head>
                    <title>Exercise Manager</title>
                </Head>
                {simpleCounterList}
            </div>
        </Layout>
    )
}

CounterPage.getInitialProps = async ({ store, req }) => {
    let counteritems = await fetch(`http://${req.headers.host}/api/post_router`, {
        method: "POST"
    })
    .then(res => {
        return res.json();
    })
    .then(json => {
        return json;
    });

    return {
        pageProps : {
            counteritems
        }
    };
}

export default connect((state) => state)(CounterPage);