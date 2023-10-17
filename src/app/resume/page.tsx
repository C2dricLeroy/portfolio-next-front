import styles from './style.module.css'
import Header from "@/components/header/header";
import {FaEnvelope, FaGithub, FaLink, FaLinkedin, FaTwitter} from "react-icons/fa";

export default function Resume() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Header></Header>
            </header>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Développeur web FullStack</h1>
                    <section className={styles.socialLink}>
                        <a className={styles.icon} href="https://github.com/C2dricLeroy" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-2x fa-github"><FaGithub size={32}></FaGithub></i>
                        </a>
                        <a className={styles.icon} href="https://www.linkedin.com/in/cdric2leroy/" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fa fa-2x fa-linkedin"><FaLinkedin size={32}/></i>
                        </a>
                        <a className={styles.icon} href="https://twitter.com/Cdric2Leroy" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fa fa-2x fa-twitter"><FaTwitter size={32}/></i>
                        </a>
                        <a className={styles.icon} href="mailto:pro.cedricleroy@gmail.com">
                            <i className="fa fa-2x fa-envelope"><FaEnvelope size={32}/></i>
                        </a>
                        <a className={styles.icon} href="https://welovedevs.com/app/fr/developer/8oSjQEQfrURJcxTaSH1E2XGQJAF3"
                           target="_blank">
                            <i className="fa fa-2x fa-link"><FaLink size={32}/></i>
                        </a>
                    </section>
                </div>
                <div className={styles.profilContainer}>
                        <img className={styles.profilePicture} src="../../../../../../../portfolio-next-front/public/profile.png" alt="profile picture"/>
                            <h2 className={styles.subTitle}>Cédric Leroy</h2>
                            <p className={styles.presentationText}>Hello! Je m&apos;appelle <b>Cédric Leroy</b>, j&apos;ai <b>26 ans</b> et j&apos;habite <b>Lille</b>. Depuis toujours j&apos;ai rêvé d&apos;une carrière dans l&apos;informatique. C&apos;est après un parcours non moins passionnant de psychologue que j&apos;ai décidé de me reconvertir. Après un an d&apos;effort et d&apos;apprentissage j&apos;obtiens mon titre CDA. Mon parcours atypique et mes qualités d&apos;analyse et d&apos;expression sont mes forces, alors n&apos;hésitez pas à me contacter! </p>
                            <div className={styles.profileInformations}>
                                <div className={styles.profileInformationItem}>
                                    <p className={styles.paragraph}><b>PROFESSION</b></p>
                                    <p className="profilInformationItemText">Développeur Web Back-end</p>
                                </div>
                                <div className={styles.profileInformationItem}>
                                    <p className={styles.paragraph}><b>DATE DE NAISSANCE</b></p>
                                    <p className={styles.profilInformationItemText}>28/03/1997</p>
                                </div>
                                <div className={styles.profileInformationItem}>
                                    <p className={styles.paragraph}><b>TELETRAVAIL</b></p>
                                    <p className={styles.profilInformationItemText}>Partiel</p>
                                </div>
                                <div className={styles.profileInformationItem}>
                                    <p className={styles.paragraph}><b>VEHICULE</b></p>
                                    <p className={styles.profilInformationItemText}>Permis B</p>
                                </div>
                                <div className={`${styles.profileInformationItem} ${styles.last}`}>
                                    <p className={styles.paragraph}><b>VILLE</b></p>
                                    <p className={styles.paragraph}>Lille, Paris</p>
                                </div>
                                <a href="/contact" className={styles.contactButton}>Contact</a>
                            </div>
                    </div>
                    <div className={styles.experienceContainer}>
                        <div className={styles.experience}>
                            <h2 className={styles.experienceTitle}>Expériences</h2>
                            <div className={styles.experienceItem}>
                                <h3 className={styles.ExperienceItemTitle}>Développeur Node.js</h3>
                                <div className={styles.experienceDate}>
                                    <p className={styles.paragraph}>
                                        <b>Depuis 10/2023</b>
                                    </p>
                                    <p className={styles.paragraph}>
                                        <b>1 formation = 1 job</b>
                                    </p>
                                </div>
                            </div>
                            <p className={styles.experienceDescription}>Spécialisation développement Back-end TypeScript au sein de l&apos;incubateur numérique d&apos;Euratechnologies avec l&apos;organisme 1 formation = 1 job</p>
                            <hr></hr>
                                <div className={styles.experienceItem}>
                                    <h3 className={styles.ExperienceItemTitle}>Développeur et C.E.O</h3>
                                    <div className={styles.experienceDate}>
                                        <p className={styles.paragraph}>
                                            <b>Depuis 10/2023</b>
                                        </p>
                                        <p className={styles.paragraph}>
                                            <b>Compunity</b>
                                        </p>
                                    </div>
                                </div>
                                <p className={styles.experienceDescription}>Projet professionnel annexe. C.E.O. de la S.A.S NeRoBeCeBa, entreprise de 3 développeurs spécialisée dans la vente et la configuration de serveurs Discord</p>
                            <hr></hr>
                                    <div className={styles.experienceItem}>
                                        <h3 className={styles.ExperienceItemTitle}>Développeur PHP & Node.js</h3>
                                        <div className={styles.experienceDate}>
                                            <p className={styles.paragraph}>
                                                <b>03/2023-06/2023 -</b>
                                            </p>
                                            <p className={styles.paragraph}>
                                                <b>Psylexia</b>
                                            </p>
                                        </div>
                                    </div>
                                    <p className={styles.experienceDescription}>Première expérience PHP sur une application existante, puis mise en place d&apos;une stratégie KPI à l&apos;aide d&apos;un serveur annexe node.js (Nest.js). Développement d&apos;une interface admin avec affichage des informations (Next.js)</p>
                            <hr></hr>
                                        <div className={styles.experienceItem}>
                                            <h3 className={styles.ExperienceItemTitle}>Psychologue Clinicien</h3>
                                            <div className={styles.experienceDate}>
                                                <p className={styles.paragraph}>
                                                    <b>09/2021-10/2022 -</b>
                                                </p>
                                                <p className={styles.paragraph}>
                                                    <b>Korian & Fondation Partage et Vie</b>
                                                </p>
                                            </div>
                                        </div>
                                        <p className={styles.experienceDescription}>Psychologue clinicien pour les groupes Korian et Fondation Partage&Vie: entretiens cliniques patients et familles, formations à destination des soignants, stimulations cognitives</p>
                        </div>
                        <div className={styles.educationSkillsContainer}>
                            <div className={`${styles.experienceContainer} ${styles.educationContainer}`}>
                                <div className={styles.education}>
                                    <h2 className={styles.experienceTitle}>Mes Diplômes</h2>
                                    <div className={styles.experienceItem}>
                                        <h3 className={styles.ExperienceItemTitle}>Titre professionnel Concepteur Développeur d&apos;Applications</h3>
                                        <div className={styles.experienceDate}>
                                            <p className={styles.paragraph}>
                                                <b>07/2023 - </b>
                                            </p>
                                            <p className={styles.paragraph}>
                                                <b>Simplon</b>
                                            </p>
                                        </div>
                                    </div>
                                    <p className={styles.experienceDescription}>Conception, Développement et Sécurisation d&apos;Applications. Projets <a className={styles.experienceDescription} href="/projects">Discord Simplon et Groovz</a></p>
                                </div>
                                <hr></hr>
                                    <div className={styles.experienceItem}>
                                        <h3 className={styles.ExperienceItemTitle}>Master 2 Psychologie</h3>
                                        <div className={styles.experienceDate}>
                                            <p className={styles.paragraph}>
                                                <b>09/2022 - </b>
                                            </p>
                                            <p className={styles.paragraph}>
                                                <b>Université de Lille</b>
                                            </p>
                                        </div>
                                    </div>
                                    <p className={styles.experienceDescription}>Obtention du Master PCPA de Lille mention Très Bien</p>
                            </div>
                            <div className={styles.hobbyContainer}>
                                <div className={styles.hobby}>
                                    <h2 className={styles.hobbyTitle}>Hobbys</h2>
                                    <ul className={styles.hobbyList}>
                                        <li className={styles.presentationText}>
                                            <h4 className={styles.pink}>Musique</h4> (M.A.O, guitare)</li>
                                        <li className={styles.presentationText}>
                                            <h4 className={styles.pink}>Sport</h4> (escalade, running, ...) </li>
                                        <li className={styles.presentationText}>
                                            <h4 className={styles.pink}>Développement</h4></li>
                                        <li className={styles.presentationText}>
                                            <h4 className={styles.pink}>Lecture</h4></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.skillsContainer}>
                            <div className={styles.skills}>
                                <h2 className={styles.skillsTitle}>Skills</h2>
                                <div className={styles.softSkills}>
                                    <ul className={styles.unorderedList}>
                                        <li className={styles.presentationText}>Capacité d&apos;analyse</li>
                                        <li className={styles.presentationText}>Capacités rédactionnelles</li>
                                        <li className={styles.presentationText}>Expression Orale</li>
                                        <li className={styles.presentationText}>Orienté client</li>
                                        <li className={styles.presentationText}>Curiosité intellectuelle</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.technologiesContainer}>
                                <div className={styles.cards}>
                                    <h2 className={styles.skillsTitle}>Outils</h2>
                                    <div className="cardContainer">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}