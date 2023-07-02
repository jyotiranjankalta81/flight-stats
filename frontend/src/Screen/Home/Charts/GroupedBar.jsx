import React from 'react'
import Chart from 'react-apexcharts'

const GroupedBar = ({ name, value1, value2 }) => {
  const series = [
    {
      // data: [44, 55, 41, 64, 22, 43, 21]
      name: 'Count',
      data: value1
    },
    {
      // data: [53, 32, 33, 52, 13, 44, 32]
      name: 'Average Fly Hour',
      data: value2
    }
  ]
  const options = {
    chart: {
      type: 'bar',
      height: 830
    },
    labels: ['count', 'avg hour'],
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      // categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
      categories: name
    }
  }

  return (
    <div>
      <Chart
        type='bar'
        options={options}
        series={series}
        height={name?.length * 90 + 50}
        width={800}
      />
    </div>
  )
}

export default GroupedBar
