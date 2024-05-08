'use client'
import React from "react";
import styles from '../../styles/navbar.module.scss'
import {useGetProfileQuery} from "@/services/profile";
import {FaSearch} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";

const Navbar = () => {
    // const {data, isLoading, error} = useGetProfileQuery();
    // console.log(data)
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_searchbar}>
                <FaSearch/>
                <input type="text" placeholder="Artists, songs or podcasts"/>
            </div>
            <div className={styles.navbar_avatar}>
                <a href="#">
                    <CgProfile/>
                    <span>Name</span>
                </a>

            </div>
        </div>
    );
};

export default Navbar;
