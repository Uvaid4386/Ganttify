import React from 'react'
import styles from './styles/Pricing.module.css'

const Pricing = () => {
  return (
    <div className={styles.priceContainer}>
    <div className={styles.pricingHead}>
      <div className={styles.pricingHeading}> <h1>Simple and Flexible <br /> Pricing </h1></div>
        <div className={styles.duration}>
            <button>Monthly</button>
            <button className={styles.annual}>Annually</button> 
        </div>
    </div>
    <div className={styles.priceCards}>
        <div className={styles.card1}>
            <small>Personal</small>
            <h1>$ 29 <small>per month</small></h1>
            <h3>for individuals and small teams looking to <br />manage their tasks</h3>
            <h3 className={styles.bold}>This Plan includes:</h3>
            <h4>Unlimited contacts</h4>
            <h4>Bulk emailing</h4>
            <h4>AI integration</h4>
            <h4>view & share upto 3 years</h4>
            <h4>Collaboration & permissions</h4>
            <button> Get Started</button>
        </div>
        <div className={styles.card2}>
            <small>Pro</small>
            <h1>$39 <small>per month</small></h1>
            <h3>For growing teams that need to track their project's progress and hit deadlines</h3>
            <h2>Everything in Standard, plus:</h2>
            <h4>Email sequences</h4>
            <h4>Send emails from multiple domains</h4>
            <h4>Connect multiple email accounts</h4>
            <h4>Fully adjustable sharing permissions</h4>
            <h4>Migration services</h4>
            <button>Get Started</button>
        </div>
        <div className={styles.card3}>
            <small>Beyond limits</small>
            <h1>Custom Plan</h1>
            <h3>For companies that need to manage a portfolio of work and goals across departments</h3>
            <h2>Everything in Standard & Pro, Plus:</h2>
            <h4>White glove onboarding</h4>
            <h4>Custom billing</h4>
            <h4>Dedicated slack channel</h4>
            <h4>Dedicated point of contact</h4>
            <h4>Unlimited reporting</h4>
            <button>Get Started</button>
        </div>

    </div>
    </div>
    
  )
}

export default Pricing