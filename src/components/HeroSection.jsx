import React from 'react'
import styles from './styles/HeroSection.module.css'
import TrustedBy from './TrustedBy'
import ReportingPanel from './ReportingPanel'
const HeroSection = () => {
  return (
    <div className={styles.left}>
    <section className={styles.hero}>
        <div className={styles.content}>
            <h1 className={styles.heroH1}>Goals and Reporting <br /> In One Place</h1>
            <p>Connect every team's work to company objectives, then track <br /> progress with real time data.</p>
            <div className={styles.ctaButtons}>
                <button className={styles.ctaGetStarted}>Get Started</button>
                <button className={styles.ctaHowItWorks}>How it Works</button>       
            </div>
            <TrustedBy/>            
        </div>
       
    </section>
    <ReportingPanel />
    </div>
  )
}

export default HeroSection