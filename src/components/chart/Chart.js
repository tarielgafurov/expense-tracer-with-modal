import React from 'react'
import ChartBar from './ChartBar'
import styles from "./Chart.module.css"

const Chart = ({items}) => {


    const month = [
        {
            label: "JAN",
            currentPrice: 0
        },
        {
            label: "FEB",
            currentPrice: 0
        },
        {
            label: "MAR",
            currentPrice: 0
        },
        {
            label: "APR",
            currentPrice: 0
        },
        {
            label: "MAY",
            currentPrice: 0
        },
        {
            label: "JUN",
            currentPrice: 0
        },
        {
            label: "JUL",
            currentPrice: 0
        },
        {
            label: "AUG",
            currentPrice: 0
        },
        {
            label: "SEP",
            currentPrice: 0
        },
        {
            label: "OCT",
            currentPrice: 0
        },
        {
            label: "NOV",
            currentPrice: 0
        },
        {
            label: "DEC",
            currentPrice: 0
        },
    ]

    items.forEach((element) => {
        const date = new Date(element.date)
        const monthNumber = date.getMonth()
        month[monthNumber].currentPrice += element.price
    })

    const maxPrice = 6000

  return (
    <div className={styles.chart} >
      {month.map((elem) => {
        return (
            <ChartBar label={elem.label} key={elem.label} maxPrice={maxPrice} curentPrice={elem.currentPrice} />
        )
      })}
    </div>
  )
}

export default Chart
