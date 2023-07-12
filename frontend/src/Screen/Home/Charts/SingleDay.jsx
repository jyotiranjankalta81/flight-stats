import React from 'react'
import LineChart from './LineCharts'

const SingleDay = () => {
  const data = [
    { date: '2023-07-01', values: [10, 15, 8] },
    { date: '2023-07-02', values: [5, 12, 3] },
    { date: '2023-07-03', values: [8, 6, 9] }
    // Add more data points for each day
  ]

  return (
    <div>
      <h1>Multiple Data Points Line Chart</h1>
      <LineChart data={data} />
    </div>
  )
}

export default SingleDay
