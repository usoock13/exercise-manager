import Layout from '../components/Layout'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import ComponentByResolution from '../components/ComponentByResolution';
import PopupCounter from '../components/Counter/PopupCounter';
import AddCounterItemButton from '../components/Counter/AddCounterItemButton';

const DB_COUNTER_ARRAY = "counter_array";
const DB_COUNTER_NAME = 'counter_name';

const CounterItem = ({ setIsActiveCounter, itemData, counterItemClickHandler }) => {
    let counters = [];
    itemData[DB_COUNTER_ARRAY].map((item, index) => {
        index >= itemData[DB_COUNTER_ARRAY].length-1 
            ? counters.push(`${item.number}`) 
            : counters.push(`${item.number}, `)
    })
    let ActiveThisCounter = () => {
        counterItemClickHandler();
        setIsActiveCounter(true);
    }

    return(
        <li className="counter_itembox" onClick={ActiveThisCounter}>
            <style jsx>
            {`
                .counter_itembox {
                    transition: box-shadow 100ms ease,
                                opacity 100ms ease;
                    padding: 1.2rem;
                    color: #494949;
                    font-size: 1.5rem;
                    background-color: var(--point-background-color);
                    border-radius: 1rem 1rem 0 0 ;
                    cursor: pointer;
                    user-select: none;
                    box-shadow: 0 0 .4rem rgba(0, 0, 0, .25);
                    opacity: 1;
                }
                .counter_itembox:hover {
                    box-shadow: .15rem .15rem .75rem rgba(0, 0, 0, .25);
                    opacity: .85;
                }
                .counter_itembox:active {
                    box-shadow: 0 0 .4rem rgba(0, 0, 0, .25);
                    opacity: 1;
                }
            `}
            </style>
            <h5 style={{ fontSize: "2.3rem" }}>{itemData[DB_COUNTER_NAME]}</h5>
            <div className="counter_thumbnail">
                <p style={{ fontSize: "1.5rem", fontWeight: 300 }}>
                    {counters}
                </p>
            </div>
        </li>
    );
}

const dummyCounterItems = [
    {
        "counter_author": "usoock",
        "counter_id": "154",
        "counter_array": [
            {
                "number": 1,
                "info": ""
            },
            {
                "number": 2,
                "info": ""
            },
            {
                "number": 3,
                "info": ""
            },
            {
                "number": 1,
                "info": ""
            },
            {
                "number": 2,
                "info": ""
            },
            {
                "number": 3,
                "info": ""
            }
        ],
        "counter_name": "제비 카운터"
    },
    {
        "counter_author": "usoock",
        "counter_id": "265",
        "counter_array": [
            {
                "number": 12,
                "info": "공중제비 1세트"
            },
            {
                "number": 12,
                "info": "다리후리기 1세트"
            },
            {
                "number": 12,
                "info": "공중제비 2세트"
            },
            {
                "number": 12,
                "info": "다리후리기 2세트"
            },
            {
                "number": 12,
                "info": "공중제비 3세트"
            },
            {
                "number": 12,
                "info": "다리후리기 3세트"
            }
        ],
        "counter_name": "12-3 순차 카운터"
    }

]

const CounterPage = (props) => {
    const counterItems = !props.counterItems ? dummyCounterItems : props.counterItems;

    const [isActivingCounter, setIsActiveCounter] = useState(0);
    const [currentCounter, setCurrentCounter] = useState(
        counterItems.length > 0
        ? counterItems[0]
        : null
    );
    let baseListStyle = {
        transition: 'grid-template-columns',
        display: 'grid',
        height: "100%",
        padding: '3rem 8rem',
        flexGrow: 1,
        flexBasis: 0,
        boxSizing: 'border-box',
    } // 기본 베이스로 깔리는 Item List Style (ul 태그)
    const [notCountingListStyle, setNotCountingListStyle] = useState({
        gridTemplateColumns: `repeat(${6}, 1fr)`,
        gridTemplateRows: 'repeat(3, 1fr)',
        gridGap: '2%',
    }) // ...카운터 비활성화 중일 때
    const isCountingListStyle = {
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        gridGap: '1%',
    } // ...카운터 활성화 중일 때
    const itemlist = [];

    const counterItemClickHandler = (targetCounterItem) => {
        setCurrentCounter(targetCounterItem);
    }

    useEffect(() => {
        setNotCountingListStyle({
            ...notCountingListStyle,
            gridTemplateColumns: `repeat(${6}, 1fr)`
       })
        window.addEventListener('resize', () => {
            if(window.innerWidth > 1420) setNotCountingListStyle({
                 ...notCountingListStyle,
                 gridTemplateColumns: `repeat(${6}, 1fr)`
            });
            else if(window.innerWidth > 720) setNotCountingListStyle({
                ...notCountingListStyle,
                gridTemplateColumns: `repeat(${3}, 1fr)`
            });
            else setNotCountingListStyle({
                ...notCountingListStyle,
                gridTemplateColumns: `repeat(${1}, 1fr)`
            });
        })
    }, [])
    
    counterItems.forEach((item, index) => {
        itemlist.push(
            <CounterItem
                key={item.id} 
                itemData={item} 
                setIsActiveCounter={setIsActiveCounter}
                counterItemClickHandler={() => {counterItemClickHandler(item)}}
            />
        )
    })

    const counterListStyle = {
        ...baseListStyle,
        ...(isActivingCounter ? isCountingListStyle : notCountingListStyle)
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
                {``}
                </style>
                {popupCounter}
                <Head>
                    <title>Exercise Manager</title>
                </Head>
                <ComponentByResolution>유숙</ComponentByResolution>
                {simpleCounterList}
                <AddCounterItemButton />
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