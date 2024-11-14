import React from 'react'
import styles from './styles/ReportingPanel.module.css'
import SpendingChart from './SpendingChart';

const ReportingPanel = () => {
  return (
    <div className={styles.reportingPanel}>
        <div className={styles.stats1}>
            <p>5,089</p>
            <span>Viewers</span>
            <small>+12.3%</small>
        </div>
        <div className={styles.stats2}>
            <p>89.90%</p>
            <span>Conversions</span>
            <small>+10%</small>
        </div>
        <div className={styles.chart}>
            <SpendingChart />
        </div>
    </div>
  )
}

export default ReportingPanel