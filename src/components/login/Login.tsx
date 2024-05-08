'use client'
import React from "react";
import styles from '../../styles/login.module.scss'
import { usePostLoginMutation } from "../../services/login";
import {useRouter} from "next/navigation";

const Login = () => {
    const [postLogin, { data, isLoading, error }] = usePostLoginMutation();
    const router= useRouter();

    const handlePostToken = async () => {
        try {
            const res = await postLogin();
            const accessToken = res.data.access_token;
            localStorage.setItem('accessToken', accessToken);
            router.push('/home')
        } catch (error) {
            console.error('Failed to fetch token:', error);
        }
    };

    return (
        <div className={styles.login}>
            <img
                className={styles.login_img}
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
                alt="spotify"
            />
            <button
                className={styles.login_btn}
                onClick={handlePostToken}
                disabled={isLoading}
            >
                {isLoading ? 'Loading...' : 'Connect to Spotify'}
            </button>
        </div>
    );
};

export default Login;
