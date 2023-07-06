import * as React from 'react'
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux'
import { allFlightDetails } from '../../../Redux/features/adminSlice'

const Manufacturer = () => {
  // console.log('props', regiondata)
  // console.log('props', regiondata)
  // console.log('props', regiondata)
  const [hours, setHours] = React.useState([])
  const [continentshare, setContinentShare] = React.useState([])
  const [engine, setEngine] = React.useState([])
  const dispatch = useDispatch()
  const { fleetdata, flightsdetails } = useSelector(state => state.admin)

  //   console.log('flightsdetails', flightsdetails)
  // console.log('flighthour', flighthours)
  //   console.log('hours', hours)
  // console.log('continentshare', continentshare)
  //   console.log('engine', engine)

  // function getAircraftClass (engineArray) {
  //   let engineCount = {}
  //   const totalEngines = engineArray.length

  //   for (let i = 0; i < totalEngines; i++) {
  //     const engine = engineArray[i]
  //     if (engineCount.hasOwnProperty(engine)) {
  //       engineCount[engine]++
  //     } else {
  //       engineCount[engine] = 1
  //     }
  //   }

  //   let engineTypes = []
  //   let engineCounts = []
  //   let enginePercentages = []

  //   for (const [engine, count] of Object.entries(engineCount)) {
  //     if (engine !== '0') {
  //       engineTypes.push(engine)
  //       engineCounts.push(count)
  //       enginePercentages.push(Math.round((count / totalEngines) * 100))
  //     }
  //   }

  //   setEngine(enginePercentages)

  //   return [engineTypes, engineCounts, enginePercentages]
  // }

  function getAircraftClass (aircraftArray) {
    // console.log('aircraft array', aircraftArray)
    const countMap = {}
    aircraftArray.forEach(obj => {
      if (obj.MANUFACTURER !== '0') {
        const engineType = obj.MANUFACTURER
        countMap[engineType] = countMap[engineType]
          ? countMap[engineType] + 1
          : 1
      }
    })

    // Generate the arrays for engine type names, counts, and percentages
    const namesArray = Object.keys(countMap)
    const countsArray = Object.values(countMap)
    // const totalCount = aircraftArray.length
    const totalCount = countsArray.reduce((sum, count) => sum + count, 0)
    // console.log('total count', totalCount)

    const percentagesArray = countsArray.map(count =>
      Number(((count / totalCount) * 100).toFixed(2))
    )

    // console.log(namesArray) // Array of engine type names
    // console.log(countsArray) // Array of engine type counts
    // console.log(percentagesArray)

    setEngine(percentagesArray)

    return [namesArray, countsArray, percentagesArray]
  }

  React.useEffect(() => {
    dispatch(allFlightDetails())
  }, [])

  React.useEffect(() => {
    if (flightsdetails?.length !== 0) {
      const arrEngineTypes = flightsdetails.map(item =>
        // item.MANUFACTURER{}
        {
          const { MANUFACTURER } = item
          return { MANUFACTURER }
        }
      )
      setHours(arrEngineTypes)
      const share = getAircraftClass(arrEngineTypes)
      setContinentShare(share)
    }
  }, [flightsdetails])
  const series = [44, 55, 41, 17, 15]
  const options = {
    chart: {
      type: 'donut',
      width: 400
    },
    // labels: ['Apples', 'Oranges', 'Berries', 'Grapes', 'Spinch'],
    labels: continentshare && continentshare?.[0],

    legend: {
      // position: 'right'
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      display: 'none',
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '10px',
      fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
      itemMargin: {
        horizontal: 3,
        vertical: 1
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'right'
          }
        }
      }
    ]
  }

  return (
    <div>
      {continentshare.length !== 0 && (
        <Chart
          type='donut'
          options={options}
          series={continentshare?.[2]}
          width={380}
          height={350}
        />
      )}
      {/* <br /> */}
      {/* <br /> */}
    </div>
  )
}

export default Manufacturer
