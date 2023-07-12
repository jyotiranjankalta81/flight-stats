import React from 'react'
import Chart from 'react-apexcharts'

const LineCharts = ({ data }) => {
  const chartOptions = {
    xaxis: {
      type: 'category',
      categories: data.map(item => item.date) // Assuming data is an array of objects with a 'date' property
    },
    yaxis: {
      title: {
        text: 'Data Points'
      }
    }
  }

  const chartSeries = data.flatMap(item => {
    const seriesData = item.values.map(value => ({ x: item.date, y: value }))
    return { name: item.name, data: seriesData }
  })

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type='line'
        height={400}
      />
    </div>
  )
}

export default LineCharts
