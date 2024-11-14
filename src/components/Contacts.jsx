import React from 'react'
import styles from './styles/contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <h1>Get in Touch with Us</h1>
            <p>Ganttify enables you to achieve clarity and significant results on a <br /> large scale by linking tasks and workflows to the overarching <br /> objectives of the company</p>
        </div>
        <div className={styles.right}>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Last-name" />
                <input type="email" placeholder="Email" />
                <input type="text" name="" placeholder="Message" />
                <button type="submit">Send Message</button>
            </form>
        </div>

    </div>
  )
}

export default Contacts