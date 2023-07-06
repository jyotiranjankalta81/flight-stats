import * as React from 'react'
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux'
import { allFlightDetails } from '../../../Redux/features/adminSlice'

const AircraftClass = () => {
  // console.log('props', regiondata)
  // console.log('props', regiondata)
  const [hours, setHours] = React.useState([])
  const [continentshare, setContinentShare] = React.useState([])
  const [engine, setEngine] = React.useState([])
  const dispatch = useDispatch()
  const { fleetdata, flightsdetails } = useSelector(state => state.admin)

  function getAircraftClass (aircraftArray) {
    const countMap = {}
    aircraftArray.forEach(obj => {
      if (obj.AIRCRAFTS_CLASS !== '0') {
        const engineType = obj.AIRCRAFTS_CLASS
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

    setEngine(percentagesArray)

    return [namesArray, countsArray, percentagesArray]
  }

  React.useEffect(() => {
    dispatch(allFlightDetails())
  }, [])

  React.useEffect(() => {
    if (flightsdetails?.length !== 0) {
      const arrEngineTypes = flightsdetails.map(item => {
        const { AIRCRAFTS_CLASS } = item
        return { AIRCRAFTS_CLASS }
      })
      // setHours(arrCountry)

      //   const countryCounts = {}

      //   countryCodes.forEach(countryCode => {
      //     if (countryCounts.hasOwnProperty(countryCode)) {
      //       countryCounts[countryCode] += 1
      //     } else {
      //       countryCounts[countryCode] = 1
      //     }
      //   })

      //   const result = []

      //   for (const countryCode in countryCounts) {
      //     result.push({ country: countryCode, count: countryCounts[countryCode] })
      //   }

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
    labels: continentshare?.[0],

    legend: {
      // position: 'right'
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '10px',
      fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
      itemMargin: {
        horizontal: 3,
        vertical: 0
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
          series={engine}
          width={380}
          height={350}
        />
      )}
    </div>
  )
}

export default AircraftClass
