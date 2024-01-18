"use client"

import styles from './style.module.css';
import Header from "@/components/header/header";
import {useEffect, useState} from "react";
import axios from "axios";
import {Project} from "@/types/projectTypes";
import {FaGithub, FaLink} from "react-icons/fa";
import { Technologies } from "@/types/Technologies";


function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}

export default function Projects() {

    const [projects,setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const response = await axios.get(apiUrl + '/projects/getAll')
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProjects().then((data) => {
            setProjects(data);
        })
    }, [])

    console.log(projects[0])

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
                        <div className={styles.Container}>
                            {project.project_date_begin && (
                                <div className={styles.dateContainer}>
                                    <h3>Date Début:</h3>
                                    <p className={styles.date}>{formatDate(project.project_date_begin)}</p>
                                </div>
                            )}
                            {project.project_date_end ? (
                                <div className={styles.dateContainer}>
                                    <h3>Date Fin:</h3>
                                    <p className={styles.date}>{formatDate(project.project_date_end)}</p>
                                </div>
                            ) : null}
                            {project.project_status.status_name && (
                                <div className={styles.dateContainer}>
                                    <h3>Statut:</h3>
                                    <p className={styles.date}>{project.project_status.status_name}</p>
                                </div>
                            )}
                        </div>

                        <div className={styles.technologiesContainer}>
                            {project.ProjectTechnology && project.ProjectTechnology.map((projectTechnology: Technologies) => (
                                <div className={styles.technologyContainer} key={projectTechnology.technology_id}>
                                    <p className={styles.technology}>
                                        {projectTechnology.technology.technology_name}
                                    </p>
                                </div>

                            ))}
                        </div>



                        {project.project_description && (
                            <p className={styles.date}>{project.project_description}</p>
                        )}

                        <div className={styles.link}>
                            {project.project_github && (
                                <a className={styles.icon} href={project.project_github}
                                   target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-2x fa-github"><FaGithub size={32}></FaGithub></i>
                                </a>
                            )}
                            {project.project_url && (
                                <a className={styles.icon} href={project.project_url}
                                   target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-2x fa-link"><FaLink size={32}/></i>
                                </a>
                        )}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}