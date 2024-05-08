'use client'
import React from "react";
import styles from '../../styles/sidebar.module.scss';
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled, MdSearch} from 'react-icons/md'
import Playlists from "../playlists/Playlists";

const Sidebar = () => {

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_topLinks}>
                <div className={styles.sidebar_topLinks_logo}>
                    <img
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                        alt="spotify"
                    />
                </div>

                <ul>
                    <li>
                        <MdHomeFilled/>
                        <span>Home</span>
                    </li>
                    <li>
                        <MdSearch/>
                        <span>Search</span>
                    </li>
                    <li>
                        <IoLibrary/>
                        <span>Your Library</span>
                    </li>
                </ul>
            </div>
            <Playlists/>
        </div>
    );
};

export default Sidebar;
