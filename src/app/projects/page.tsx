import styles from './style.module.css';
import {HiRadio} from "react-icons/hi2";
import Header from "@/components/header/header";



export default function Projects() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <Header></Header>
            </div>
            <h1>Mes projets</h1>
            <div className={styles.cardContainer}>
                {/*{projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <h2 className={styles.cardContainer>{project.Name}</h2>
                        <div className={styles.dateContainer}>
                            {project.DateDebut && (
                                <div className={styles.date}>
                                    <h3>Date Début:</h3>
                                    <p className={styles.date}>{project.DateDebut}</p>
                                </div>
                            )}
                            {project.DateFin && (
                                <div className={styles.date}>
                                    <h3>Date Fin:</h3>
                                    <p className={styles.date}>{project.DateFin}</p>
                                </div>
                            )}
                        </div>
                        <p className={styles.description}>{project.Description}</p>
                        {project.Github && (
                            <div className={styles.link}>
                                <a href={project.Github}>Github</a>
                            </div>
                        )}
                        {project.URL && (
                            <div className={styles.link}>
                                <a href={project.URL}>URL</a>
                            </div>
                        )}
                        {project.Statut && (
                            <div className={styles.link}>
                                <p>Statut: {project.Statut}</p>
                            </div>
                        )}
                    </div>
                ))}*/}
            </div>
        </div>
    );
}