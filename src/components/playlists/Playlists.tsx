'use client'
import React, {useEffect} from "react";
import styles from '../../styles/sidebar.module.scss';
import ClipLoader from 'react-spinners/ClipLoader';

import {useGetUserPlaylistsQuery} from "../../services/playlists";

const Playlists = () => {

    const {data, isLoading, error} = useGetUserPlaylistsQuery();

    return (
        <div className={styles.playlists}>
        </div>
    );
};

export default Playlists;
