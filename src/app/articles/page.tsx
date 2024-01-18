'use client'
import styles from './style.module.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "@/components/header/header";
import {Project} from "@/types/projectTypes";
import {Technologies} from "@/types/Technologies";
import {FaGithub, FaLink} from "react-icons/fa";
import {Article} from "@/types/Articles";

function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}
export default function Articles() {

    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/articles/getAll');
            return response.data;
        } catch(error) {
            console.log(error);
        }
    }

    useEffect (() => {
        fetchArticles().then((data) => {
            console.log(data);
            setArticles(data);
        })
    }, [])

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <Header></Header>
            </div>
            <h1 className={styles.title}>Mes Articles</h1>
            <div className={styles.cardContainer}>
                {articles.map((article: Article, index) => (
                    <div key={article.id} className={styles.card}>
                        <h2 className={styles.subtitle}>{article.title}</h2>
                        <div className={styles.Container}>
                            {article.created_at && (
                                <div className={styles.dateContainer}>
                                    <h3>Date de Début :</h3>
                                    <p className={styles.date}>{formatDate(article.created_at)}</p>
                                </div>
                            )}

                            {article.article_status.status_name && (
                                <div className={styles.dateContainer}>
                                    <h3>Statut :</h3>
                                    <p className={styles.date}>{article.article_status.status_name}</p>
                                </div>
                            )}
                        </div>

                        <div className={styles.link}>
                            {article.link && (
                                <a className={styles.icon} href={article.link}
                                   target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-2x fa-link"><FaLink size={32}/></i>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}