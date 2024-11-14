import React from 'react'
import styles from './styles/footer.module.css'
const Footer = () => {
  return(
    <div className={styles.container}>
        <div className={styles.nav}>
            <h2>Ganttify</h2>
        </div>
        <div className={styles.main}>
            <div className={styles.box1}>
                <h2>Ganttify</h2>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Customer suceess</li>
                    <li>Templates</li>
                    <li>Trust & Security</li>
                </ul>
            </div>
            <div className={styles.box2}>
                <h2>Solutions</h2>
                <ul>
                    <li>Project Management</li>
                    <li>Goal Management</li>
                    <li>Agile Management</li>
                    <li>Task Management</li>
                    <li>Productivity</li>
                    <li>Work Management</li>
                    <li>Project Planning</li>
                    <li>To Do list</li>
                </ul>
            </div>
            <div className={styles.box3}>
                <h2>About Us</h2>
                <ul>
                    <li>Company </li>
                    <li>Leadership</li>
                    <li>Customer</li>
                    <li>Careers</li>
                    <li>Changelog</li>

                </ul>
            </div>
            <div className={styles.box4}>
                <h2>Resources</h2>
                <ul>
                    <li>Help center</li>
                    <li>FAQ</li>
                    <li>Developers & API</li>
                    <li>Community</li>
                    <li>Events</li>
                    <li>Status</li>
                </ul>
            </div>
            <div className={styles.box5}>
                <h2>Helpful links</h2>
                <ul>
                    <li>Legal Center</li>
                    <li>Privacy Policy</li>
                    <li>Partnerships</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Footer