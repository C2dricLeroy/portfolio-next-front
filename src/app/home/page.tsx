import styles from './style.module.css';
import Header from '../../components/header/header';
import {FaEnvelope, FaGithub, FaLink, FaLinkedin, FaTwitter} from 'react-icons/fa';

export default function Home() {
    return (
        <main className="page">
            <header className="header">
                <Header></Header>
            </header>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>CEDRIC LEROY</h1>
                        <h2 className={styles.subTitle}>Concepteur Développeur d&apos;applications TypeScript</h2>
                        <p className={styles.paragraph}>
                            Concepteur Développeur formé à la psychologie, je crois en la force des relations humaines
                            pour atteindre la meilleure des solutions digitale.
                        </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src='/profile.png' className={styles.imgResponsive} alt="profile picture"/>
                    </div>
                </div>
                <section className={styles.socialLinks}>
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
        </main>
    )
}