import Layout from '../components/Layout'
import Head from 'next/head';
import React, { useState } from 'react';
import Counter from '../components/Counter';

const CounterListItem = ({ setActiveCounterFunctions : setActFunc, data }) => {
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
        setActFunc.onActiveCounter();
        console.log(setActFunc.onActiveCounter);
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

/*  죽어라 끔찍한 데이터 페칭
export async function getStaticProps() {
     const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        return res.json();
    })

    console.log("Death is only the beginning")

    return { 
        props : {
            data
        } 
    };
}
*/

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
    console.dir(props);
    const setActiveCounterFunctions = {
        onActiveCounter: () => {
            setIsActiveCounter(true);
        },
        onInectiveCounter: () => {
            setIsActiveCounter(false);
        }
    }
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
                setActiveCounterFunctions={setActiveCounterFunctions}
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
                            setActiveCounterFunctions={setActiveCounterFunctions} 
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
export default CounterPage;