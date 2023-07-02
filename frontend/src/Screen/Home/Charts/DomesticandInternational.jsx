import * as React from 'react'
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux'
import { allFlightDetails } from '../../../Redux/features/adminSlice'

const DomesticandInternational = () => {
  const [hours, setHours] = React.useState([])
  const [continentshare, setContinentShare] = React.useState([])
  const [engine, setEngine] = React.useState([])
  const dispatch = useDispatch()
  const { fleetdata, flightsdetails } = useSelector(state => state.admin)

  // console.log('flightdetails', flightdetails)
  // console.log('flighthour', flighthours)
  // console.log('hours', hours)
  // console.log('continentshare', continentshare)
  // console.log('engine', engine)

  //   function getAircraftClass (engineArray) {
  //     let engineCount = {}
  //     const totalEngines = engineArray.length

  //     for (let i = 0; i < totalEngines; i++) {
  //       const engine = engineArray[i]
  //       if (engineCount.hasOwnProperty(engine)) {
  //         engineCount[engine]++
  //       } else {
  //         engineCount[engine] = 1
  //       }
  //     }

  //     let engineTypes = []
  //     let engineCounts = []
  //     let enginePercentages = []

  //     for (const [engine, count] of Object.entries(engineCount)) {
  //       if (engine !== '0') {
  //         engineTypes.push(engine)
  //         engineCounts.push(count)
  //         enginePercentages.push(Math.round((count / totalEngines) * 100))
  //       }
  //     }

  //     setEngine(enginePercentages)

  //     return [engineTypes, engineCounts, enginePercentages]
  //   }

  function getdomesticandinternationaldata (flights) {
    let domesticCount = 0
    let internationalCount = 0
    const flightTypes = []

    // Iterate over the flights array
    flights.forEach(flight => {
      if (flight.DEP_COUNTRY !== '0' && flight.ARR_COUNTRY !== 0) {
        if (flight.DEP_COUNTRY === flight.ARR_COUNTRY) {
          // Domestic flight
          domesticCount++
          flightTypes.push('Domestic')
        } else {
          // International flight
          internationalCount++
          flightTypes.push('International')
        }
      }
    })

    // Calculate the total number of flights
    const totalCount = domesticCount + internationalCount

    // Calculate the percentage of domestic and international flights
    const domesticPercentage = Math.round((domesticCount / totalCount) * 100)
    const internationalPercentage = Math.round(
      (internationalCount / totalCount) * 100
    )

    // Create arrays with the count and percentage values
    const countArray = [domesticCount, internationalCount]
    const percentageArray = [domesticPercentage, internationalPercentage]

    setEngine(percentageArray)

    return [countArray, percentageArray, flightTypes]
  }

  React.useEffect(() => {
    dispatch(allFlightDetails())
  }, [])

  React.useEffect(() => {
    if (flightsdetails?.length !== 0) {
      const arrEngineTypes = flightsdetails.map(
        item => {
          const { DEP_COUNTRY, ARR_COUNTRY } = item
          return { DEP_COUNTRY, ARR_COUNTRY }
        }
        // item.MANUFACTURER
      )
      setHours(arrEngineTypes)
      const share = getdomesticandinternationaldata(arrEngineTypes)
      setContinentShare(share)
    }
  }, [flightsdetails])

  // console.log('props', regiondata)
  const series = [44, 55, 41, 17, 15]
  const options = {
    chart: {
      type: 'donut',
      width: 400
    },
    labels: ['Domestic', 'International'],
    colors: ['#FFB800', '#FF0000'],

    legend: {
      // position: 'right'
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '15px',
      fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
      itemMargin: {
        horizontal: 6,
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
          series={continentshare?.[1]}
          width={380}
          height={350}
        />
      )}
    </div>
  )
}

export default DomesticandInternational
