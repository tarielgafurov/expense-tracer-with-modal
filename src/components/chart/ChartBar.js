import React from 'react'
import styles from "./ChartBar.module.css"

const ChartBar = ({maxPrice , curentPrice, label}) => {

    const fillHeight = (100 * curentPrice) / maxPrice

  return (
    <div className={styles.chartBar} >
      <div className={styles.chartBarInner} > 
        <div className={styles.chartBarFill} style={{height: `${fillHeight}%`}}></div>
      </div>
      <p className={styles.chartBarLabel} >{label}</p>
    </div>
  )
}

export default ChartBar
