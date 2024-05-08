'use client'
import React from "react";
import styles from '../../styles/currentTrack.module.scss'
import {useGetCurrentTrackQuery} from "@/src/services/currentTrack";
const CurrentTrack = () => {
    const {data, isLoading, error} = useGetCurrentTrackQuery();
    console.log(data)
    return (
        <div className={styles.currentTrack}>

        </div>
    );
};

export default CurrentTrack;
