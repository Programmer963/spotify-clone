'use client'
import React, {useState} from "react";
import styles from '../../styles/navbar.module.scss'
import {useGetProfileQuery} from "@/services/profile";
import {FaSearch} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";

const Navbar = ({navBackground, onSearch}) => {
    // const {data, isLoading, error} = useGetProfileQuery();
    // console.log(data)

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
        onSearch(searchTerm);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchSubmit();
        }
    };
    return (
        <div className={styles.navbar} style={navBackground ? {backgroundColor: 'rgba(0,0,0,0.7)'} : {}}>
            <div className={styles.navbar_searchbar}>
                <FaSearch/>
                <input
                    type="text"
                    placeholder="Search tracks by name"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    onKeyPress={handleKeyPress}
                />
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
