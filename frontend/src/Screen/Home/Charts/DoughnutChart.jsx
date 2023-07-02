import * as React from 'react'
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux'
import { allFlightDetails } from '../../../Redux/features/adminSlice'

const DoughnutChart = () => {
  // console.log('props', regiondata)
  const [hours, setHours] = React.useState([])
  const [continentshare, setContinentShare] = React.useState([])
  const dispatch = useDispatch()
  const { fleetdata, flightsdetails } = useSelector(state => state.admin)

  // console.log('continentshare', flightdetails)
  function getContinentShare (countriesData) {
    const countryToContinent = {
      AF: 'AS',
      AL: 'EU',
      AQ: 'AN',
      DZ: 'AF',
      AS: 'OC',
      AD: 'EU',
      AO: 'AF',
      AG: 'NA',
      AZ: 'EU',
      AZ: 'AS',
      AR: 'SA',
      AU: 'OC',
      AT: 'EU',
      BS: 'NA',
      BH: 'AS',
      BD: 'AS',
      AM: 'EU',
      AM: 'AS',
      BB: 'NA',
      BE: 'EU',
      BM: 'NA',
      BT: 'AS',
      BO: 'SA',
      BA: 'EU',
      BW: 'AF',
      BV: 'AN',
      BR: 'SA',
      BZ: 'NA',
      IO: 'AS',
      SB: 'OC',
      VG: 'NA',
      BN: 'AS',
      BG: 'EU',
      MM: 'AS',
      BI: 'AF',
      BY: 'EU',
      KH: 'AS',
      CM: 'AF',
      CA: 'NA',
      CV: 'AF',
      KY: 'NA',
      CF: 'AF',
      LK: 'AS',
      TD: 'AF',
      CL: 'SA',
      CN: 'AS',
      TW: 'AS',
      CX: 'AS',
      CC: 'AS',
      CO: 'SA',
      KM: 'AF',
      YT: 'AF',
      CG: 'AF',
      CD: 'AF',
      CK: 'OC',
      CR: 'NA',
      HR: 'EU',
      CU: 'NA',
      CY: 'EU',
      CY: 'AS',
      CZ: 'EU',
      BJ: 'AF',
      DK: 'EU',
      DM: 'NA',
      DO: 'NA',
      EC: 'SA',
      SV: 'NA',
      GQ: 'AF',
      ET: 'AF',
      ER: 'AF',
      EE: 'EU',
      FO: 'EU',
      FK: 'SA',
      GS: 'AN',
      FJ: 'OC',
      FI: 'EU',
      AX: 'EU',
      FR: 'EU',
      GF: 'SA',
      PF: 'OC',
      TF: 'AN',
      DJ: 'AF',
      GA: 'AF',
      GE: 'EU',
      GE: 'AS',
      GM: 'AF',
      PS: 'AS',
      DE: 'EU',
      GH: 'AF',
      GI: 'EU',
      KI: 'OC',
      GR: 'EU',
      GL: 'NA',
      GD: 'NA',
      GP: 'NA',
      GU: 'OC',
      GT: 'NA',
      GN: 'AF',
      GY: 'SA',
      HT: 'NA',
      HM: 'AN',
      VA: 'EU',
      HN: 'NA',
      HK: 'AS',
      HU: 'EU',
      IS: 'EU',
      IN: 'AS',
      ID: 'AS',
      IR: 'AS',
      IQ: 'AS',
      IE: 'EU',
      IL: 'AS',
      IT: 'EU',
      CI: 'AF',
      JM: 'NA',
      JP: 'AS',
      KZ: 'EU',
      KZ: 'AS',
      JO: 'AS',
      KE: 'AF',
      KP: 'AS',
      KR: 'AS',
      KW: 'AS',
      KG: 'AS',
      LA: 'AS',
      LB: 'AS',
      LS: 'AF',
      LV: 'EU',
      LR: 'AF',
      LY: 'AF',
      LI: 'EU',
      LT: 'EU',
      LU: 'EU',
      MO: 'AS',
      MG: 'AF',
      MW: 'AF',
      MY: 'AS',
      MV: 'AS',
      ML: 'AF',
      MT: 'EU',
      MQ: 'NA',
      MR: 'AF',
      MU: 'AF',
      MX: 'NA',
      MC: 'EU',
      MN: 'AS',
      MD: 'EU',
      ME: 'EU',
      MS: 'NA',
      MA: 'AF',
      MZ: 'AF',
      OM: 'AS',
      NA: 'AF',
      NR: 'OC',
      NP: 'AS',
      NL: 'EU',
      AN: 'NA',
      CW: 'NA',
      AW: 'NA',
      SX: 'NA',
      BQ: 'NA',
      NC: 'OC',
      VU: 'OC',
      NZ: 'OC',
      NI: 'NA',
      NE: 'AF',
      NG: 'AF',
      NU: 'OC',
      NF: 'OC',
      NO: 'EU',
      MP: 'OC',
      UM: 'OC',
      UM: 'NA',
      FM: 'OC',
      MH: 'OC',
      PW: 'OC',
      PK: 'AS',
      PA: 'NA',
      PG: 'OC',
      PY: 'SA',
      PE: 'SA',
      PH: 'AS',
      PN: 'OC',
      PL: 'EU',
      PT: 'EU',
      GW: 'AF',
      TL: 'AS',
      PR: 'NA',
      QA: 'AS',
      RE: 'AF',
      RO: 'EU',
      RU: 'EU',
      RU: 'AS',
      RW: 'AF',
      BL: 'NA',
      SH: 'AF',
      KN: 'NA',
      AI: 'NA',
      LC: 'NA',
      MF: 'NA',
      PM: 'NA',
      VC: 'NA',
      SM: 'EU',
      ST: 'AF',
      SA: 'AS',
      SN: 'AF',
      RS: 'EU',
      SC: 'AF',
      SL: 'AF',
      SG: 'AS',
      SK: 'EU',
      VN: 'AS',
      SI: 'EU',
      SO: 'AF',
      ZA: 'AF',
      ZW: 'AF',
      ES: 'EU',
      SS: 'AF',
      EH: 'AF',
      SD: 'AF',
      SR: 'SA',
      SJ: 'EU',
      SZ: 'AF',
      SE: 'EU',
      CH: 'EU',
      SY: 'AS',
      TJ: 'AS',
      TH: 'AS',
      TG: 'AF',
      TK: 'OC',
      TO: 'OC',
      TT: 'NA',
      AE: 'AS',
      TN: 'AF',
      TR: 'EU',
      TR: 'AS',
      TM: 'AS',
      TC: 'NA',
      TV: 'OC',
      UG: 'AF',
      UA: 'EU',
      MK: 'EU',
      EG: 'AF',
      GB: 'EU',
      GG: 'EU',
      JE: 'EU',
      IM: 'EU',
      TZ: 'AF',
      US: 'NA',
      VI: 'NA',
      BF: 'AF',
      UY: 'SA',
      UZ: 'AS',
      VE: 'SA',
      WF: 'OC',
      WS: 'OC',
      YE: 'AS',
      ZM: 'AF',
      XX: 'OC',
      XE: 'AS',
      XD: 'AS',
      XS: 'AS'
    }
    const continentCounts = []
    let totalCount = 0

    countriesData.forEach(({ country, count }) => {
      const continent = countryToContinent[country]

      if (continent) {
        continentCounts[continent] = (continentCounts[continent] || 0) + count
        totalCount += count
      }
    })

    const continentShares = []

    for (const continent in continentCounts) {
      const count = continentCounts[continent]
      const percentage = (count / totalCount) * 100
      continentShares[continent] = {
        count,
        percentage: percentage.toFixed(2)
      }
    }

    const arr = [
      parseInt(continentShares?.AF?.percentage),
      parseInt(continentShares?.AS?.percentage),
      parseInt(continentShares?.EU?.percentage),
      parseInt(continentShares?.NA?.percentage),
      parseInt(continentShares?.OC?.percentage),
      parseInt(continentShares?.SA?.percentage)
    ]

    return arr
  }

  React.useEffect(() => {
    dispatch(allFlightDetails())
  }, [])

  React.useEffect(() => {
    if (flightsdetails?.length !== 0) {
      const countryCodes = flightsdetails.map(item => item.DEP_COUNTRY)
      // setHours(arrCountry)

      const countryCounts = {}

      countryCodes.forEach(countryCode => {
        if (countryCounts.hasOwnProperty(countryCode)) {
          countryCounts[countryCode] += 1
        } else {
          countryCounts[countryCode] = 1
        }
      })

      const result = []

      for (const countryCode in countryCounts) {
        result.push({ country: countryCode, count: countryCounts[countryCode] })
      }

      setHours(result)

      const share = getContinentShare(result)
      setContinentShare(share)
    }
  }, [flightsdetails])

  const series = [44, 55, 41, 17, 15]
  const options = {
    chart: {
      type: 'donut',
      width: 400
    },
    labels: [
      'Africa',
      'Asia',
      'Europe',
      'North America',
      'Ocenia',
      'South America'
    ],
    colors: ['#0400B8', '#B8B8B8', '#63C700', '#FF0000', '#0097C7', '#FFB800'],

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
      {flightsdetails?.length !== 0 && (
        <Chart
          type='donut'
          options={options}
          series={continentshare}
          width={380}
          height={350}
        />
      )}
    </div>
  )
}

export default DoughnutChart
