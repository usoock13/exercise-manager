import Layout from '../components/Layout'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { wrapper } from "../store/modules";

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
                .counter_itembox>h5 {
                    font-size: 2.3rem;
                }
                .counter_itembox>p {
                    font-size: 1.7rem;
                    font-weight: 300;
                }
                @media screen and (max-width: 1200px) {
                    .counter_itembox {
                        text-align: center;
                        padding: 3rem 1.9rem;
                    }
                    .counter_itembox>h5 {
                        font-size: 4.5rem;
                        font-weight: 700;
                    }
                    .counter_itembox>.counter_thumbnail>p {
                        font-size: 2.9rem;
                        font-weight: 400;
                    }
                }
                @media screen and (max-width: 720px) {
                    .counter_itembox {
                        text-align: center;
                        padding: 4.9rem 1.9rem;
                    }
                    .counter_itembox>h5 {
                        font-size: 7.5rem;
                        font-weight: 700;
                    }
                    .counter_itembox>.counter_thumbnail>p {
                        font-size: 4.9rem;
                        font-weight: 400;
                    }
                }
            `}
            </style>
            <h5 style={{}}>{itemData[DB_COUNTER_NAME]}</h5>
            <div className="counter_thumbnail">
                <p style={{}}>
                    {counters}
                </p>
            </div>
        </li>
    );
}

const CounterPage = (props) => {
    // console.log(props);

    const dummyCounterItems = [];
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
    const notCountingListStyle = {
        gridTemplateColumns: `repeat(${6}, 1fr)`,
        gridTemplateRows: 'repeat(3, 1fr)',
        gridGap: '2%',
    } // ...카운터 비활성화 중일 때
    const isCountingListStyle = {
        gridGap: '1%',
    } // ...카운터 활성화 중일 때
    const itemlist = [];

    const counterItemClickHandler = (targetCounterItem) => {
        setCurrentCounter(targetCounterItem);
    }
    
    counterItems.forEach((item, index) => {
        item['current_turn'] = 0;
        itemlist.push(
            <CounterItem
                key={item['counter_id']} 
                itemData={item} 
                setIsActiveCounter={setIsActiveCounter}
                counterItemClickHandler={() => {counterItemClickHandler(item)}}
            />
        )
    })

    const popupCounter = <PopupCounter 
                            setIsActivePopupCounter={setIsActiveCounter} 
                            isActivingPopupCounter={isActivingCounter} 
                            currentCounter={currentCounter}
                        ></PopupCounter>
    const emptyCounterAlert = <div className="empty_counter_alert"
                                    style={{
                                        display: "inline-flex",
                                        width: "100%",
                                        fontSize: "calc(10px + 2rem)",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                아무고토엄소용
                            </div>
    return (
        <Layout>
            <div className="counter_page_wrap" style={{}}>
                <style jsx>
                {`
                    .counter_page_wrap {
                        display: flex;
                        width: 100%;
                        height: 100%;
                    }

                    @media screen and (max-width: 1200px) {
                        .counter_page_wrap {
                            flex-direction: column;
                        }
                    }
                    @media screen and (max-width: 720px) {
                    }
                `}
                </style>
                {popupCounter}
                <Head>
                    <title>Exercise Manager</title>
                </Head>
                {itemlist.length <= 0
                    ? emptyCounterAlert
                    : 
                    <ComponentByResolution>
                        <div style={{flexGrow: 1}} maxresolution={1920} default>
                            <ul className="simple_counter_list" 
                                style={{
                                    ...baseListStyle,
                                    ...(isActivingCounter 
                                        ? {
                                            ...isCountingListStyle,
                                            gridTemplateColumns: 'repeat(1, 1fr)',
                                            gridTemplateRows: 'repeat(5, 1fr)',
                                        }
                                        : {
                                            ...notCountingListStyle,
                                            gridTemplateColumns: `repeat(6, 1fr)`
                                       })
                                }}>
                                    {itemlist}
                            </ul>
                        </div>
                        <div style={{flexGrow: 1}} maxresolution={1200}>
                            <ul className="simple_counter_list" 
                                style={{
                                    ...baseListStyle,
                                    ...(isActivingCounter 
                                        ? {
                                            ...isCountingListStyle,
                                            gridTemplateColumns: `repeat(5, 1f)`,
                                            gridTemplateRows: `repeat(1, 1f)`
                                        }
                                        :
                                        {
                                            ...notCountingListStyle,
                                            gridTemplateColumns: `repeat(3, 1fr)`
                                       })
                                }}>
                                    {itemlist}
                            </ul>
                        </div>
                        <div style={{flexGrow: 1}} maxresolution={720}>
                            <ul className="simple_counter_list" 
                                style={{
                                    ...baseListStyle,
                                    ...(isActivingCounter 
                                        ? {
                                            ...isCountingListStyle,
                                            gridTemplateColumns: `repeat(3, 1f)`,
                                            gridTemplateRows: `repeat(1, 1f)`
                                        }
                                        : {
                                            ...notCountingListStyle,
                                            gridTemplateColumns: `repeat(1, 1fr)`
                                       })
                                }}>
                                    {itemlist}
                            </ul>
                        </div>
                    </ComponentByResolution>
                }
                <AddCounterItemButton />
            </div>
        </Layout>
    )
}

// export const getServerSideProps = async (props) => {
export const getServerSideProps = wrapper.getServerSideProps((store) => {
    console.log(store.getState());
    return (async ({ req }) => {
        let counterItems = await fetch(`http://${req.headers.host}/api/post_router`, {
            method: "POST",
        })
        .then(res => {
            if(res.status !== 200) { return false; }
            else { return res.json(); }
        }) || store.getState().counter.counters;
        
        return {
            props : {
                counterItems
            }
        };
    })
});

export default connect((state) => state)(CounterPage);