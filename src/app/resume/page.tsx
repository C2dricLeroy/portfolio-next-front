import styles from './style.module.css'
import Header from "@/components/header/header";

export default function Resume() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Header></Header>
            </header>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1>Développeur web FullStack</h1>
                    <section className={styles.socialLink}>
                        <a className={styles.icon} href="https://github.com/C2dricLeroy" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-2x fa-github"></i>
                        </a>
                        <a className={styles.icon} href="https://www.linkedin.com/in/cdric2leroy/" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-2x fa-linkedin"></i>
                        </a>
                        <a className={styles.icon} href="https://twitter.com/Cdric2Leroy" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-2x fa-twitter"></i>
                        </a>
                        <a className={styles.icon} href="https://welovedevs.com/app/fr/developer/8oSjQEQfrURJcxTaSH1E2XGQJAF3" target="_blank">
                            <i class="fa fa-2x fa-link"></i>
                        </a>
                    </section>
                </div>
                <div className={styles.profilContainer}>
                        <img className={styles.profilePicture} src="../../../../../../../portfolio-next-front/public/profile.png" alt="profile picture"/>
                            <h2>Cédric Leroy</h2>
                            <p className={styles.presentationText}>Hello! Je m'appelle <b>Cédric Leroy</b>, j'ai <b>26 ans</b> et j'habite <b>Lille</b>. Depuis toujours j'ai rêvé d'une carrière dans l'informatique. C'est après un parcours non moins passionnant de psychologue que j'ai décidé de me reconvertir. Après un an d'effort et d'apprentissage j'obtiens mon titre CDA. Mon parcours atypique et mes qualités d'analyse et d'expression sont mes forces, alors n'hésitez pas à me contacter! </p>
                            <div class="profile-informations">
                                <div class="profile-information-item">
                                    <p><b>PROFESSION</b></p>
                                    <p class="profil-information-item-text">Développeur Web Back-end</p>
                                </div>
                                <div class="profile-information-item">
                                    <p><b>DATE DE NAISSANCE</b></p>
                                    <p class="profil-information-item-text">28/03/1997</p>
                                </div>
                                <div class="profile-information-item">
                                    <p><b>TELETRAVAIL</b></p>
                                    <p class="profil-information-item-text">Partiel</p>
                                </div>
                                <div class="profile-information-item">
                                    <p><b>VEHICULE</b></p>
                                    <p class="profil-information-item-text">Permis B</p>
                                </div>
                                <div class="profile-information-item last">
                                    <p><b>VILLE</b></p>
                                    <p>Lille, Paris</p>
                                </div>
                                <a routerLink="/contact" class="contact-button">Contact</a>
                            </div>
                    </div>
                    <div class="experience-container">
                        <div class="experience">
                            <h2 class="experience-title">Expériences</h2>
                            <div class="experience-item">
                                <h3>Développeur Node.js</h3>
                                <div class="experience-date">
                                    <p>
                                        <b>Depuis 10/2023</b>
                                    </p>
                                    <p>
                                        <b>1 formation = 1 job</b>
                                    </p>
                                </div>
                            </div>
                            <p class="experience-description">Spécialisation développement Back-end TypeScript au sein de l'incubateur numérique d'Euratechnologies avec l'organisme 1 formation = 1 job</p>
                            <hr>
                                <div class="experience-item">
                                    <h3>Développeur et C.E.O</h3>
                                    <div class="experience-date">
                                        <p>
                                            <b>Depuis 10/2023</b>
                                        </p>
                                        <p>
                                            <b>Compunity</b>
                                        </p>
                                    </div>
                                </div>
                                <p class="experience-description">Projet professionnel annexe. C.E.O. de la S.A.S NeRoBeCeBa, entreprise de 5 développeurs spécialisée dans la vente et la configuration de serveurs Discord</p>
                                <hr>
                                    <div class="experience-item">
                                        <h3>Développeur PHP & Node.js</h3>
                                        <div class="experience-date">
                                            <p>
                                                <b>03/2023-06/2023 -</b>
                                            </p>
                                            <p>
                                                <b>Psylexia</b>
                                            </p>
                                        </div>
                                    </div>
                                    <p class="experience-description">Première expérience PHP sur une application existente, puis mise en place d'une stratégie KPI à l'aide d'un serveur annexe node.js (Nest.js). Développement d'une interface admin avec affichage des informations (Next.js)</p>
                                    <hr>
                                        <div class="experience-item">
                                            <h3>Psychologue Clinicien</h3>
                                            <div class="experience-date">
                                                <p>
                                                    <b>09/2021-10/2022 -</b>
                                                </p>
                                                <p>
                                                    <b>Korian & Fondation Partage et Vie</b>
                                                </p>
                                            </div>
                                        </div>
                                        <p class="experience-description">Psychologue clinicien pour les groupes Korian et Fondation Partage&Vie: entretiens cliniques patients et familles, formations à destination des soignants, stimulations cognitives</p>
                        </div>
                        <div class="education-skills-container">
                            <div class="experience-container education-container">
                                <div class="education">
                                    <h2 class="experience-title">Mes Diplômes</h2>
                                    <div class="experience-item">
                                        <h3>Titre professionnel Concepteur Développeur d'Applications</h3>
                                        <div class="experience-date">
                                            <p>
                                                <b>07/2023 - </b>
                                            </p>
                                            <p>
                                                <b>Simplon</b>
                                            </p>
                                        </div>
                                    </div>
                                    <p class="experience-description">Conception, Développement et Sécurisation d'Applications. Projets <a class="experience-description" routerLink="/projects">Discord Simplon et Groovz</a></p>
                                </div>
                                <hr>
                                    <div class="experience-item">
                                        <h3>Master 2 Psychologie</h3>
                                        <div class="experience-date">
                                            <p>
                                                <b>09/2022 - </b>
                                            </p>
                                            <p>
                                                <b>Université de Lille</b>
                                            </p>
                                        </div>
                                    </div>
                                    <p class="experience-description">Obtention du Master PCPA de Lille mention Très Bien</p>
                            </div>
                            <div class="hobby-container">
                                <div class="hobby">
                                    <h2 class="hobby-title">Hobbys</h2>
                                    <ul class="hobby-list">
                                        <li class="presentation-text">
                                            <h4 class="pink">Musique</h4> (M.A.O, guitare)</li>
                                        <li class="presentation-text">
                                            <h4 class="pink">Sport</h4> (escalade, running, ...) </li>
                                        <li class="presentation-text">
                                            <h4 class="pink">Développement</h4></li>
                                        <li class="presentation-text">
                                            <h4 class="pink">Lecture</h4></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="skills-container">
                            <div class="skills">
                                <h2 class="skills-title">Skills</h2>
                                <div class="soft-skills">
                                    <ul>
                                        <li class="presentation-text">Capacité d'analyse</li>
                                        <li class="presentation-text">Capacités rédactionnelles</li>
                                        <li class="presentation-text">Expression Orale</li>
                                        <li class="presentation-text">Orienté client</li>
                                        <li class="presentation-text">Curiosité intelectuelle</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="technologies-container">
                                <div class="cards">
                                    <h2 class="skills-title">Outils</h2>
                                    <div class="card-container">
                                        <div *ngFor="let techno of technos">
                                        <div class="card">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)
};