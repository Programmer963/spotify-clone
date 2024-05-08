'use client'
import React, {useEffect, useState} from "react";
import styles from '../../styles/body.module.scss'
import {AiFillClockCircle} from "react-icons/ai";
import {useGetPlaylistQuery} from "../../services/playlists";
import { useDispatch, useSelector } from "react-redux";
import {addPlaylist} from "../../lib/slices/bodyPlaylists.slice";
import {useParams} from "next/navigation";



const Body = ({headerBackground, onSearch}) => {

    const dispatch = useDispatch();
    const playlist = useSelector((state) => state.playlists && state.playlists.playlists[0]);

    const { data, isLoading, error } = useGetPlaylistQuery();

    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        setSearchTerm(onSearch);
    }, [setSearchTerm, onSearch]);

    const filteredTracks = playlist ? playlist.tracks.filter(track =>
        track.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    useEffect(() => {
        if (!isLoading) {
            const selectedPlaylist = {
                id: data.id,
                name: data.name,
                description: data.description,
                image: data.images[0].url,
                tracks: data.tracks.items.map(({ track }) => ({
                    id: track.id,
                    name: track.name,
                    artists: track.artists.map((artist) => artist.name),
                    image: track.album.images[2].url,
                    duration: track.duration_ms,
                    album: track.album.name,
                    context_uri: track.album.uri,
                    track_number: track.track_number,
                }
                )),
            };
            dispatch(addPlaylist(selectedPlaylist));
        }
    }, [data, isLoading, error, dispatch]);


    return (
        <div className={styles.body}>
            {
                playlist && (
                    <>
                        <div className={styles.body_playlist}>
                            <div className={styles.image} >
                                <img src={playlist.image} alt='playlist-image'/>
                            </div>
                            <div className={styles.details}>
                                <span className={styles.type}>PLAYLIST</span>
                                <h1 className={styles.title}>{playlist.name}</h1>
                                <p className={styles.description}>{playlist.description}</p>

                            </div>
                        </div>

                        <div className={styles.body_list}>
                            <div className={styles.header_row} style={headerBackground?{backgroundColor:'#000'} : {}}>
                                <div className={styles.col}>
                                    <span>#</span>
                                </div>
                                <div className={styles.col}>
                                    <span>TITLE</span>
                                </div>
                                <div className={styles.col}>
                                    <span>ALBUM</span>
                                </div>
                                <div className={styles.col}>
                                    <span><AiFillClockCircle/></span>
                                </div>
                            </div>

                            <div className={styles.tracks}>
                                {filteredTracks.map(({ id, name, artists, image, duration, album, context_uri, track_number }, index) => (
                                        <div className={styles.row} key={id}>
                                            <div className={styles.col}>
                                                <span>{index + 1}</span>
                                            </div>
                                            <div className={styles.col} style={{display: 'flex', gap: '1rem'}}>
                                                <div className={styles.image}>
                                                    <img src={image} alt={'track-image'}/>
                                                </div>
                                                <div className={styles.info}>
                                                    <span className={styles.name}>{name}</span>
                                                    <span>{artists}</span>
                                                </div>
                                            </div>
                                            <div className={styles.col}>
                                                <span>{album}</span>
                                            </div>
                                            <div className={styles.col}>
                                                <span>{duration}</span>
                                            </div>
                                        </div>
                                ))}
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Body;
