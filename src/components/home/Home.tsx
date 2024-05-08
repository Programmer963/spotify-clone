'use client'
import React, {useEffect, useRef, useState} from "react";
import styles from '../../styles/home.module.scss'
import {useGetNewAlbumQuery} from "../../services/home";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Body from "../body/Body";
import CurrentTrack from "@/src/components/currentTrack/CurrentTrack";

const Home = () => {
    const bodyRef = useRef();
    const [navBackground, setNavBackground] = useState(false);
    const [headerBackground, setHeaderBackground] = useState(false);

    const bodyScroller = () => {
        bodyRef.current.scrollTop >= 30 ? setNavBackground(true) : setNavBackground(false)
        bodyRef.current.scrollTop >= 268 ? setHeaderBackground(true): setHeaderBackground(false)
    }

    const {data, isLoading, error} = useGetNewAlbumQuery();
    // console.log(data)

    const [searchTerm, setSearchTerm] = useState('');


    return (
        <div className={styles.home}>
            <div className={styles.home_main}>
                <Sidebar/>
                <div className={styles.home_body} ref={bodyRef} onScroll={bodyScroller}>
                    <Navbar navBackground={navBackground} onSearch={setSearchTerm}/>
                    <div className={styles.home_body_content}>
                        <Body headerBackground={headerBackground} onSearch={searchTerm}/>
                    </div>
                </div>
            </div>
            <div className={styles.home_footer}>
                <Footer/>
                <CurrentTrack/>
            </div>
        </div>
    );
};

export default Home;
