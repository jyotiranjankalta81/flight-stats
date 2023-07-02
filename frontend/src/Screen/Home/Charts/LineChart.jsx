import * as React from 'react'
import Chart from 'react-apexcharts'

const LineChart = ({ data }) => {
  // console.log('props', prop)
  // console.log('serier', seriess)
  // console.log('option', option)
  // console.log('count', count)
  // console.log('data', data)
  const series = [
    {
      name: '2023',
      // data: [28, 29, 33, 36, 32, 32, 33]
      data: data?.[0]?.length !== 0 && data?.[0]?.value
    },
    {
      name: '2000',
      // data: [28, 29, 33, 36, 32, 32, 33]
      data: data?.[1]?.length !== 0 && data?.[1]?.value
    }
    // {
    //   name: 'Low - 2013',
    //   data: [12, 11, 14, 18, 17, 13, 13]
    // }
  ]

  const options = {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      toolbar: {
        show: false
      }
    },
    // labels: ['2023', '2059'],
    colors: ['#77B6EA', '#545F54'],
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Flight Trending Data',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    markers: {
      size: 1
    },
    xaxis: {
      // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      categories: data?.[0]?.length !== 0 && data?.[0]?.name,
      title: {
        text: 'Hour Duration'
      }
    },
    yaxis: {
      title: {
        text: 'flight count'
      },
      min: 1,
      max:
        data?.[0]?.value.sort(function (a, b) {
          return b - a
        }) && data?.[0]?.value?.[0] + 15
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  }

  return (
    <div>
      {data?.length !== 0 && (
        <Chart
          type='line'
          options={options}
          series={series}
          height={430}
          width={1000}
        />
      )}
      {/* <h3>test table</h3> */}
    </div>
  )
}

export default LineChart
