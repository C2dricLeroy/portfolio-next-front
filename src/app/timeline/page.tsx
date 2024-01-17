"use client"
import React, { useEffect } from 'react';
import styles from './style.module.css';
import Header from "@/components/header/header";
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Timeline() {

    const events = [
        { year: "12/2023", description: "Fin du dispositif Incubateur numérique" },
        { year: "10/2023", description: "Entrée au sein de l'incubateur numérique d'Euratechnologies" },
        { year: "07/2023", description: "Diplômé Concepteur Développeur d'Applications" },
        { year: "10/2022", description: "Entrée en formation Concepteur Développeur d'Applications"},
        { year: "03/2022", description: "Découverte du développement web et complétion du CS50"},
        { year: "10/2021", description: "Psychologue clinicien pour les groupes Korian et Fondation Partage & Vie" },
        { year: "09/2022", description: "Obtention du Master PCPA de l'Université de Lille et du titre de psychologue clinicien"},
        { year: "09/2016", description: "Entrée à l'Université de Lille Licence de Psychologie"},
        { year: "09/2015", description: "1ère année de Médecine P.A.C.E.S."},
        { year: "09/2015", description: "Obtention du baccalauréat Scientifique mention bien"},
    ];

    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <Header></Header>
            </div>
            <h1>Mon Parcours</h1>
            <div className={styles.timeline}>
                <div className={styles.verticalLine}> </div>
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={index % 2 === 0 ? styles.eventLeft : styles.eventRight}
                        data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                    >
                        <h2 className={styles.year}>{event.year}</h2>
                        <p className={styles.paragraph}>{event.description}</p>
                    </div>
                ))}
            </div>
        </main>

    );
}
