'use client'
import React, {useEffect} from "react";
import styles from '../../styles/body.module.scss'
import {AiFillClockCircle} from "react-icons/ai";
import {useGetPlaylistQuery} from "../../services/playlists";
import { useDispatch, useSelector } from "react-redux";
import {addPlaylist} from "../../lib/slices/bodyPlaylists.slice";


const Body = () => {
    const dispatch = useDispatch(); // Получаем функцию диспетчера из Redux
    const playlist = useSelector((state) => state.playlists && state.playlists.playlists[0]);


    const { data, isLoading, error } = useGetPlaylistQuery();
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
                            <div className={styles.header_row}>
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
                                {
                                    playlist.tracks.map(({
                                        id,
                                        name,
                                        artists,
                                        image,
                                        duration,
                                        album,
                                        context_uri,
                                        track_number
                                    }, index) => {
                                        return (
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
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
                )
            }
            {/*{playlist ? (*/}
            {/*    <div className={styles.playlist}>*/}
            {/*        <h2>{playlist.name}</h2>*/}
            {/*        <p>{playlist.description}</p>*/}
            {/*        <img src={playlist.image} alt={playlist.name} />*/}
            {/*        <ul>*/}
            {/*            {playlist.tracks.map((track) => (*/}
            {/*                <li key={track.id}>*/}
            {/*                    <p>{track.name}</p>*/}
            {/*                    <p>{track.artists.join(", ")}</p>*/}
            {/*                    <img src={track.image} alt={track.name} />*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*) : (*/}
            {/*    <p>Loading...</p>*/}
            {/*)}*/}
        </div>
    );
};

export default Body;
