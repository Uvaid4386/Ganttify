import React from 'react'
import styles from './styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className="left">
            <span className={styles.logo}>Ganttify</span>
           
            <span className={styles.navlinks}>
                <a href="">Products</a>
                <a href="">Solutions</a>
                <a href="">Resources</a>
                <a href="">Company</a>
                <a href="">Pricing</a>
             </span>
        </div>
        <div className={styles.authbuttons}>
            <button className={styles.signin}>Sign In</button>
            <button  className={styles.getStarted}> Get Started</button>
        </div>
    </nav>  
  )
}
export default Navbar
