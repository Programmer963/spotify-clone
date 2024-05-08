'use client'
import React from "react";
import styles from '../../styles/home.module.scss'
import {useGetNewAlbumQuery} from "../../services/home";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Body from "../body/Body";

const Login = () => {
    const {data, isLoading, error} = useGetNewAlbumQuery();
    // console.log(data)
    return (
        <div className={styles.home}>
            <div className={styles.home_body}>
                <Sidebar/>
                <div className={styles.home_body_content}>
                    <Navbar/>
                    <Body/>
                </div>
            </div>
            <div className={styles.home_footer}>
                    <Footer/>
            </div>
        </div>
    );
};

export default Login;
