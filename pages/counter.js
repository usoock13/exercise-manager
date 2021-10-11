import Layout from '../components/Layout'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { connect } from "react-redux";
import PopupCounter from '../components/PopupCounter';

const DB_COUNTER_ARRAY = "counter_array";
const DB_COUNTER_NAME = 'counter_name';

const CounterItem = ({ setIsActiveCounter, itemData }) => {
    let itemStyle = {
        color: '#494949',
        fontSize: '1.5rem',
        backgroundColor: 'rgba(77, 81, 211, .09)',
        borderRadius: '1rem 1rem 0 0 ',
        cursor: 'pointer',
        userSelect: 'none',
    }
    let counters = [];
    itemData[DB_COUNTER_ARRAY].map((item, index) => {
        index >= itemData[DB_COUNTER_ARRAY].length-1 
            ? counters.push(`${item.number}`) 
            : counters.push(`${item.number}, `)
    })
    let ActiveThisCounter = () => {
        setIsActiveCounter(true);
    }

    return(
        <li className="counter_itembox" style={itemStyle} onClick={ActiveThisCounter}>
            <h5 style={{ fontSize: "2.3rem" }}>{itemData[DB_COUNTER_NAME]}</h5>
            <div className="counter_thumbnail">
                <p style={{ fontSize: "1.5rem", fontWeight: 300 }}>
                    {counters}
                </p>
            </div>
        </li>
    );
}
const CounterPage = (props) => {
    const [isActivingCounter, setIsActiveCounter] = useState(0);
    const [currentCounter, setCurrentCounter] = useState(
        props.counterItems.length > 0
        ? props.counterItems[0]
        : null
    );
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
    
    if(props.counterItems) props.counterItems.forEach(item => {
        itemlist.push(
            <CounterItem
                key={item.id} 
                itemData={item} 
                setIsActiveCounter={setIsActiveCounter}
            />
        )
    }) // Counter Item 유무에 따른 레이아웃 구분 필요

    const counterListStyle = {
        ...listStyle,
        ...(isActivingCounter ? isCountingStyle : notCountingStyle)
    }
    const simpleCounterList = <ul className="simple_counter_list" 
                                style={counterListStyle}>
                                        {itemlist}
                            </ul>
    const popupCounter = <PopupCounter 
                            setIsActivePopupCounter={setIsActiveCounter} 
                            isActivingPopupCounter={isActivingCounter} 
                            currentCounter={currentCounter}
                        ></PopupCounter>

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

export const getServerSideProps = async ({ store, req }) => {
    let counterItems = await fetch(`http://${req.headers.host}/api/post_router`, {
        method: "POST",
    })
    .then(res => {
        if(res.status !== 200) { return false; }
        else { return res.json(); }
    })
    
    return {
        props : {
            counterItems
        }
    };
}

export default connect((state) => state)(CounterPage);