import styles from './style.module.css';
import Header from "@/components/header/header";
import {FaEnvelope, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

export default function Contact() {
    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <Header></Header>
            </div>
            <div className={styles.contactSection}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Entrons en contact!</h1>
                    <p className={styles.paragraph}>Il existe différents moyen de me contacter. Je suis présent sur de nombreux réseaux et canaux de
                        communication! </p>
                </div>
                <section className={styles.socialLink}>
                    <div className={styles.links}>
                        <a className={styles.icon} href="https://github.com/C2dricLeroy" target="_blank"
                           rel="noopener noreferrer">
                            <p className={styles.paragraph}> Github :</p>
                            <i className={styles.ml2}><FaGithub size={32}/></i>
                        </a>
                        <a className={styles.icon} href="https://www.linkedin.com/in/cdric2leroy/" target="_blank"
                           rel="noopener noreferrer">
                            <p className={styles.paragraph}>LinkedIn :</p>
                            <i className={styles.ml2}><FaLinkedin size={32}/></i>
                        </a>
                        <a className={styles.icon} href="https://twitter.com/Cdric2Leroy" target="_blank"
                           rel="noopener noreferrer">
                            <p className={styles.paragraph}>Twitter :</p>
                            <i className={styles.ml2}><FaTwitter size={32}/></i>
                        </a>
                    </div>
                    <hr className={styles.border}></hr>
                        <div className={styles.mail}>
                            <a className={styles.icon} href="mailto:pro.cedricleroy@gmail.com">
                                <p className={styles.paragraph}>Mail :</p>
                                <i className={styles.ml2}><FaEnvelope size={32}/></i>
                            </a>
                        </div>
                </section>
                <hr></hr>
                    <p className={styles.paragraph}>Ou via ce formulaire de contact : </p>
                    <form className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="name">Nom</label>
                            <input className={styles.input} type="text" id="name" name="name" placeholder="Entrez votre nom" minLength={2}
                                   required/>
                            <span className={styles.inputBorder}></span>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input className={styles.input} type="email" id="email" name="email" placeholder="Entrez votre email" required/>
                            <span className={styles.inputBorder}></span>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="phone">Téléphone</label>
                            <input className={styles.input} type="tel" id="phone" name="phone" placeholder="06xxxxxxxx" required/>
                            <span className={styles.inputBorder}></span>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="message">Message</label>
                            <textarea className={`${styles.input} ${styles.message}`} name="message" rows={4} placeholder="" minLength={10}
                                      required></textarea>
                            <span className={styles.inputBorder}></span>
                        </div>
                        <button type="submit" className={styles.btnSubmit}>Envoyer</button>
                    </form>
            </div>
        </main>
    )
}