"use client"

import styles from './style.module.css';
import {HiRadio} from "react-icons/hi2";
import Header from "@/components/header/header";
import {useEffect, useState} from "react";
import axios from "axios";
import {Project} from "@/types/projectTypes";



export default function Projects() {

    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const response = await axios.get('http://localhost:3500/projects/getAll')
            console.log(response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProjects().then((data) => {
            console.log(data);
            setProjects(data);
        })
    }, [])




    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <Header></Header>
            </div>
            <h1 className={styles.title}>Mes projets</h1>
            <div className={styles.cardContainer}>
                {projects.map((project: Project, index) => (
                    <div key={project.project_id} className={styles.card}>
                        <h2 className={styles.subtitle}>{project.project_name}</h2>
                        <div className={styles.dateContainer}>
                            {project.project_date_begin && (
                                <div className={styles.date}>
                                    <h3>Date Début:</h3>
                                    <p className={styles.date}>{project.project_date_begin}</p>
                                </div>
                            )}
                            {project.project_date_end && (
                                <div className={styles.date}>
                                    <h3>Date Fin:</h3>
                                    <p className={styles.date}>{project.project_date_end}</p>
                                </div>
                            )}
                        </div>
                        <p className={styles.description}>{project.project_description}</p>
                        {project.project_github && (
                            <div className={styles.link}>
                                <a href={project.project_github}>Github</a>
                            </div>
                        )}
                        {project.project_url && (
                            <div className={styles.link}>
                                <a href={project.project_url}>URL</a>
                            </div>
                        )}
                        {project.project_status.status_name && (
                            <div className={styles.link}>
                                <p>Statut: {project.project_status.status_name}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}