'use client'
import styles from './style.module.css';
import {useEffect, useState} from "react";
import axios from "axios";

export default function Articles() {

    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + 'articles/getAll');
            return response.data;
        } catch(error) {
            console.log(error);
        }
    }

    useEffect (() => {
        fetchArticles().then((data) => {
            setArticles(data);
        })
    }, [])


    return (
        <main className={styles.main}></main>
    )
}