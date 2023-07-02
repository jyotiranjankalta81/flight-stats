import * as React from 'react'
import './Home.css'
import LineChart from './Charts/LineChart'
import DoughnutChart from './Charts/DoughnutChart'
import GroupedBar from './Charts/GroupedBar'
import DataTable from './Tables/DataTable'
import { useDispatch, useSelector } from 'react-redux'
import { allFlightDetails, fleetData } from '../../Redux/features/adminSlice'
import AircraftClass from './Charts/AircraftClass'
import Manufacturer from './Charts/Manufacturer'
import DomesticandInternational from './Charts/DomesticandInternational'
import ReactPaginate from 'react-paginate'
// import moment from 'moment.js'
import moment from 'moment'
import HeatMap from './Charts/HeatMap'
// import countryContinents from 'country-continents'

// const data = [
//   { date: '2023-01-01', count: 10, airport: 'JFK' },
//   { date: '2023-01-02', count: 5, airport: 'LAX' },
//   { date: '2023-01-03', count: 8, airport: 'ORD' },
//   { date: '2023-01-04', count: 12, airport: 'ATL' },
//   { date: '2023-01-05', count: 7, airport: 'DFW' },
//   { date: '2023-01-06', count: 9, airport: 'DEN' },
//   { date: '2023-01-07', count: 6, airport: 'SFO' },
//   { date: '2023-01-08', count: 11, airport: 'LAS' },
//   { date: '2023-01-09', count: 4, airport: 'MIA' },
//   { date: '2023-01-10', count: 15, airport: 'SEA' },
//   { date: '2023-01-11', count: 8, airport: 'MCO' },
//   { date: '2023-01-12', count: 3, airport: 'PHX' },
//   { date: '2023-01-13', count: 13, airport: 'IAH' },
//   { date: '2023-01-14', count: 7, airport: 'BOS' },
//   { date: '2023-01-15', count: 10, airport: 'EWR' },
//   { date: '2023-01-16', count: 6, airport: 'MDW' },
//   { date: '2023-01-17', count: 9, airport: 'MSP' },
//   { date: '2023-01-18', count: 5, airport: 'DTW' },
//   { date: '2023-01-19', count: 11, airport: 'PHL' },
//   { date: '2023-01-20', count: 8, airport: 'LGA' }
// ]

const Home = () => {
  const [flighthours, setFlightHours] = React.useState()
  const [flightfleethour, setfleetFlightHours] = React.useState()
  const [hours, setHours] = React.useState([])
  const [continentshare, setContinentShare] = React.useState([])
  const [change_type, setChange_type] = React.useState([])
  const [databytime, setDataByTime] = React.useState([])
  const [changes_type, setChanges_type] = React.useState('country')
  const [lineselection_type, setLineSelection_type] = React.useState('day')
  const [yearwise, setYearwise] = React.useState([])
  const [flightdetails, setFlightDetails] = React.useState([])
  const [filters, setFilters] = React.useState([])
  const [jetclass, setJetclass] = React.useState('')
  const [manufacture, setManufacture] = React.useState('')
  const [model, setModel] = React.useState('')
  const [region, setRegion] = React.useState('')
  const [countrys, setCountry] = React.useState('')
  const [daterange, setDaterange] = React.useState({
    startDate: '',
    endDate: ''
  })
  const [fleetsdata, setFleetData] = React.useState([])
  const [fleetstatics, setfleetStatics] = React.useState([])
  const [datas, setdata] = React.useState([])
  const [fleettype, setFleettType] = React.useState('class')
  const [data, setData] = React.useState([])
  const [periodflight, setperiodflight] = React.useState()

  // console.log('lineselec', lineselection_type)
  // console.log('changes_type', changes_type)

  const dispatch = useDispatch()
  const { flightsdetails } = useSelector(state => state.admin)

  // console.log('flightdetails', flightdetails)
  // console.log('flightsdetails', flightsdetails)
  // console.log('flighthour', flighthours)
  // console.log('hours', hours)
  // console.log('changetypes', change_type)
  // console.log('setbytime', databytime)
  // console.log('yearwise', yearwise)
  // console.log('filters', filters)
  // console.log('fleetstatic', fleetstatics)
  // console.log('daterange', daterange)
  // console.log('datas', data)
  // console.log('fleet', fleetsdata)
  // console.log('region', region)
  // console.log('periodflight', periodflight)

  const resetAll = () => {
    setJetclass('')
    setManufacture('')
    setModel('')
    setCountry('')
    setDaterange({ startDate: '', endDate: '' })
  }

  // Filter function based on selected properties and values

  function getCountryName (countryCode) {
    // Replace with your own implementation to retrieve the country name based on the country code
    const countryData = [
      { name: 'Afghanistan', code: 'AF' },
      { name: 'Åland Islands', code: 'AX' },
      { name: 'Albania', code: 'AL' },
      { name: 'Algeria', code: 'DZ' },
      { name: 'American Samoa', code: 'AS' },
      { name: 'AndorrA', code: 'AD' },
      { name: 'Angola', code: 'AO' },
      { name: 'Anguilla', code: 'AI' },
      { name: 'Antarctica', code: 'AQ' },
      { name: 'Antigua and Barbuda', code: 'AG' },
      { name: 'Argentina', code: 'AR' },
      { name: 'Armenia', code: 'AM' },
      { name: 'Aruba', code: 'AW' },
      { name: 'Australia', code: 'AU' },
      { name: 'Austria', code: 'AT' },
      { name: 'Azerbaijan', code: 'AZ' },
      { name: 'Bahamas', code: 'BS' },
      { name: 'Bahrain', code: 'BH' },
      { name: 'Bangladesh', code: 'BD' },
      { name: 'Barbados', code: 'BB' },
      { name: 'Belarus', code: 'BY' },
      { name: 'Belgium', code: 'BE' },
      { name: 'Belize', code: 'BZ' },
      { name: 'Benin', code: 'BJ' },
      { name: 'Bermuda', code: 'BM' },
      { name: 'Bhutan', code: 'BT' },
      { name: 'Bolivia', code: 'BO' },
      { name: 'Bosnia and Herzegovina', code: 'BA' },
      { name: 'Botswana', code: 'BW' },
      { name: 'Bouvet Island', code: 'BV' },
      { name: 'Brazil', code: 'BR' },
      { name: 'British Indian Ocean Territory', code: 'IO' },
      { name: 'Brunei Darussalam', code: 'BN' },
      { name: 'Bulgaria', code: 'BG' },
      { name: 'Burkina Faso', code: 'BF' },
      { name: 'Burundi', code: 'BI' },
      { name: 'Cambodia', code: 'KH' },
      { name: 'Cameroon', code: 'CM' },
      { name: 'Canada', code: 'CA' },
      { name: 'Cape Verde', code: 'CV' },
      { name: 'Cayman Islands', code: 'KY' },
      { name: 'Central African Republic', code: 'CF' },
      { name: 'Chad', code: 'TD' },
      { name: 'Chile', code: 'CL' },
      { name: 'China', code: 'CN' },
      { name: 'Christmas Island', code: 'CX' },
      { name: 'Cocos (Keeling) Islands', code: 'CC' },
      { name: 'Colombia', code: 'CO' },
      { name: 'Comoros', code: 'KM' },
      { name: 'Congo', code: 'CG' },
      { name: 'Congo, The Democratic Republic of the', code: 'CD' },
      { name: 'Cook Islands', code: 'CK' },
      { name: 'Costa Rica', code: 'CR' },
      { name: "Cote D'Ivoire", code: 'CI' },
      { name: 'Croatia', code: 'HR' },
      { name: 'Cuba', code: 'CU' },
      { name: 'Cyprus', code: 'CY' },
      { name: 'Czech Republic', code: 'CZ' },
      { name: 'Denmark', code: 'DK' },
      { name: 'Djibouti', code: 'DJ' },
      { name: 'Dominica', code: 'DM' },
      { name: 'Dominican Republic', code: 'DO' },
      { name: 'Ecuador', code: 'EC' },
      { name: 'Egypt', code: 'EG' },
      { name: 'El Salvador', code: 'SV' },
      { name: 'Equatorial Guinea', code: 'GQ' },
      { name: 'Eritrea', code: 'ER' },
      { name: 'Estonia', code: 'EE' },
      { name: 'Ethiopia', code: 'ET' },
      { name: 'Falkland Islands (Malvinas)', code: 'FK' },
      { name: 'Faroe Islands', code: 'FO' },
      { name: 'Fiji', code: 'FJ' },
      { name: 'Finland', code: 'FI' },
      { name: 'France', code: 'FR' },
      { name: 'French Guiana', code: 'GF' },
      { name: 'French Polynesia', code: 'PF' },
      { name: 'French Southern Territories', code: 'TF' },
      { name: 'Gabon', code: 'GA' },
      { name: 'Gambia', code: 'GM' },
      { name: 'Georgia', code: 'GE' },
      { name: 'Germany', code: 'DE' },
      { name: 'Ghana', code: 'GH' },
      { name: 'Gibraltar', code: 'GI' },
      { name: 'Greece', code: 'GR' },
      { name: 'Greenland', code: 'GL' },
      { name: 'Grenada', code: 'GD' },
      { name: 'Guadeloupe', code: 'GP' },
      { name: 'Guam', code: 'GU' },
      { name: 'Guatemala', code: 'GT' },
      { name: 'Guernsey', code: 'GG' },
      { name: 'Guinea', code: 'GN' },
      { name: 'Guinea-Bissau', code: 'GW' },
      { name: 'Guyana', code: 'GY' },
      { name: 'Haiti', code: 'HT' },
      { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
      { name: 'Holy See (Vatican City State)', code: 'VA' },
      { name: 'Honduras', code: 'HN' },
      { name: 'Hong Kong', code: 'HK' },
      { name: 'Hungary', code: 'HU' },
      { name: 'Iceland', code: 'IS' },
      { name: 'India', code: 'IN' },
      { name: 'Indonesia', code: 'ID' },
      { name: 'Iran, Islamic Republic Of', code: 'IR' },
      { name: 'Iraq', code: 'IQ' },
      { name: 'Ireland', code: 'IE' },
      { name: 'Isle of Man', code: 'IM' },
      { name: 'Israel', code: 'IL' },
      { name: 'Italy', code: 'IT' },
      { name: 'Jamaica', code: 'JM' },
      { name: 'Japan', code: 'JP' },
      { name: 'Jersey', code: 'JE' },
      { name: 'Jordan', code: 'JO' },
      { name: 'Kazakhstan', code: 'KZ' },
      { name: 'Kenya', code: 'KE' },
      { name: 'Kiribati', code: 'KI' },
      { name: "Korea, Democratic People'S Republic of", code: 'KP' },
      { name: 'Korea, Republic of', code: 'KR' },
      { name: 'Kuwait', code: 'KW' },
      { name: 'Kyrgyzstan', code: 'KG' },
      { name: "Lao People'S Democratic Republic", code: 'LA' },
      { name: 'Latvia', code: 'LV' },
      { name: 'Lebanon', code: 'LB' },
      { name: 'Lesotho', code: 'LS' },
      { name: 'Liberia', code: 'LR' },
      { name: 'Libyan Arab Jamahiriya', code: 'LY' },
      { name: 'Liechtenstein', code: 'LI' },
      { name: 'Lithuania', code: 'LT' },
      { name: 'Luxembourg', code: 'LU' },
      { name: 'Macao', code: 'MO' },
      { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
      { name: 'Madagascar', code: 'MG' },
      { name: 'Malawi', code: 'MW' },
      { name: 'Malaysia', code: 'MY' },
      { name: 'Maldives', code: 'MV' },
      { name: 'Mali', code: 'ML' },
      { name: 'Malta', code: 'MT' },
      { name: 'Marshall Islands', code: 'MH' },
      { name: 'Martinique', code: 'MQ' },
      { name: 'Mauritania', code: 'MR' },
      { name: 'Mauritius', code: 'MU' },
      { name: 'Mayotte', code: 'YT' },
      { name: 'Mexico', code: 'MX' },
      { name: 'Micronesia, Federated States of', code: 'FM' },
      { name: 'Moldova, Republic of', code: 'MD' },
      { name: 'Monaco', code: 'MC' },
      { name: 'Mongolia', code: 'MN' },
      { name: 'Montserrat', code: 'MS' },
      { name: 'Morocco', code: 'MA' },
      { name: 'Mozambique', code: 'MZ' },
      { name: 'Myanmar', code: 'MM' },
      { name: 'Namibia', code: 'NA' },
      { name: 'Nauru', code: 'NR' },
      { name: 'Nepal', code: 'NP' },
      { name: 'Netherlands', code: 'NL' },
      { name: 'Netherlands Antilles', code: 'AN' },
      { name: 'New Caledonia', code: 'NC' },
      { name: 'New Zealand', code: 'NZ' },
      { name: 'Nicaragua', code: 'NI' },
      { name: 'Niger', code: 'NE' },
      { name: 'Nigeria', code: 'NG' },
      { name: 'Niue', code: 'NU' },
      { name: 'Norfolk Island', code: 'NF' },
      { name: 'Northern Mariana Islands', code: 'MP' },
      { name: 'Norway', code: 'NO' },
      { name: 'Oman', code: 'OM' },
      { name: 'Pakistan', code: 'PK' },
      { name: 'Palau', code: 'PW' },
      { name: 'Palestinian Territory, Occupied', code: 'PS' },
      { name: 'Panama', code: 'PA' },
      { name: 'Papua New Guinea', code: 'PG' },
      { name: 'Paraguay', code: 'PY' },
      { name: 'Peru', code: 'PE' },
      { name: 'Philippines', code: 'PH' },
      { name: 'Pitcairn', code: 'PN' },
      { name: 'Poland', code: 'PL' },
      { name: 'Portugal', code: 'PT' },
      { name: 'Puerto Rico', code: 'PR' },
      { name: 'Qatar', code: 'QA' },
      { name: 'Reunion', code: 'RE' },
      { name: 'Romania', code: 'RO' },
      { name: 'Russian Federation', code: 'RU' },
      { name: 'RWANDA', code: 'RW' },
      { name: 'Saint Helena', code: 'SH' },
      { name: 'Saint Kitts and Nevis', code: 'KN' },
      { name: 'Saint Lucia', code: 'LC' },
      { name: 'Saint Pierre and Miquelon', code: 'PM' },
      { name: 'Saint Vincent and the Grenadines', code: 'VC' },
      { name: 'Samoa', code: 'WS' },
      { name: 'San Marino', code: 'SM' },
      { name: 'Sao Tome and Principe', code: 'ST' },
      { name: 'Saudi Arabia', code: 'SA' },
      { name: 'Senegal', code: 'SN' },
      { name: 'Serbia and Montenegro', code: 'CS' },
      { name: 'Seychelles', code: 'SC' },
      { name: 'Sierra Leone', code: 'SL' },
      { name: 'Singapore', code: 'SG' },
      { name: 'Slovakia', code: 'SK' },
      { name: 'Slovenia', code: 'SI' },
      { name: 'Solomon Islands', code: 'SB' },
      { name: 'Somalia', code: 'SO' },
      { name: 'South Africa', code: 'ZA' },
      { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
      { name: 'Spain', code: 'ES' },
      { name: 'Sri Lanka', code: 'LK' },
      { name: 'Sudan', code: 'SD' },
      { name: 'Suriname', code: 'SR' },
      { name: 'Svalbard and Jan Mayen', code: 'SJ' },
      { name: 'Swaziland', code: 'SZ' },
      { name: 'Sweden', code: 'SE' },
      { name: 'Switzerland', code: 'CH' },
      { name: 'Syrian Arab Republic', code: 'SY' },
      { name: 'Taiwan, Province of China', code: 'TW' },
      { name: 'Tajikistan', code: 'TJ' },
      { name: 'Tanzania, United Republic of', code: 'TZ' },
      { name: 'Thailand', code: 'TH' },
      { name: 'Timor-Leste', code: 'TL' },
      { name: 'Togo', code: 'TG' },
      { name: 'Tokelau', code: 'TK' },
      { name: 'Tonga', code: 'TO' },
      { name: 'Trinidad and Tobago', code: 'TT' },
      { name: 'Tunisia', code: 'TN' },
      { name: 'Turkey', code: 'TR' },
      { name: 'Turkmenistan', code: 'TM' },
      { name: 'Turks and Caicos Islands', code: 'TC' },
      { name: 'Tuvalu', code: 'TV' },
      { name: 'Uganda', code: 'UG' },
      { name: 'Ukraine', code: 'UA' },
      { name: 'United Arab Emirates', code: 'AE' },
      { name: 'United Kingdom', code: 'GB' },
      { name: 'United States', code: 'US' },
      { name: 'United States Minor Outlying Islands', code: 'UM' },
      { name: 'Uruguay', code: 'UY' },
      { name: 'Uzbekistan', code: 'UZ' },
      { name: 'Vanuatu', code: 'VU' },
      { name: 'Venezuela', code: 'VE' },
      { name: 'Viet Nam', code: 'VN' },
      { name: 'Virgin Islands, British', code: 'VG' },
      { name: 'Virgin Islands, U.S.', code: 'VI' },
      { name: 'Wallis and Futuna', code: 'WF' },
      { name: 'Western Sahara', code: 'EH' },
      { name: 'Yemen', code: 'YE' },
      { name: 'Zambia', code: 'ZM' },
      { name: 'Zimbabwe', code: 'ZW' }
    ]
    const departureCountryName = countryData.find(
      country => country.code === countryCode
    )?.name
    return departureCountryName || 'Unknown'
  }
  function filtervalueExtractingArray (filteredArray) {
    // console.log('aircraft', aircraftArray)
    // Filter out objects with any property value '0'
    // const filteredArray = aircraftArray.filter(obj => {
    //   for (let prop in obj) {
    //     if (obj[prop] === '0') {
    //       return false // Exclude object if any property value is '0'
    //     }
    //   }
    //   return true // Include object if no property value is '0'
    // })

    // Extract unique values for each property
    const uniqueEngineTypes = [...new Set(filteredArray.map(obj => obj.ENGINE))]
    const uniqueManufacturers = [
      ...new Set(filteredArray.map(obj => obj.MANUFACTURER))
    ]
    const uniqueModels = [...new Set(filteredArray.map(obj => obj.MODEL))]
    const uniqueCountryCodes = [
      ...new Set(filteredArray.map(obj => obj.DEP_COUNTRY))
    ]

    // Convert arrays to array of objects with key-value pairs
    const engineTypesArray = uniqueEngineTypes.map(engineType => ({
      key: 'ENGINE',
      value: engineType
    }))
    const manufacturersArray = uniqueManufacturers.map(manufacturer => ({
      key: 'MANUFACTURER',
      value: manufacturer
    }))
    const modelsArray = uniqueModels.map(model => ({
      key: 'MODEL',
      value: model
    }))
    const countryCodesArray = uniqueCountryCodes.map(countryCode => ({
      key: 'DEP_COUNTRY',
      value: countryCode,
      // getCountryName(countryCode)
      countryName: getCountryName(countryCode)
    }))

    // console.log(engineTypesArray) // Array of objects with key-value pairs for engine types
    // console.log(manufacturersArray) // Array of objects with key-value pairs for manufacturers
    // console.log(modelsArray) // Array of objects with key-value pairs for models
    // console.log(countryCodesArray) // Array of objects with key-value pairs for country codes   // Array of objects with key-value pairs for country codes

    return [
      engineTypesArray,
      manufacturersArray,
      modelsArray,
      countryCodesArray
    ]
  }

  function filterArray (selectedProperties) {
    // Check if all properties in selectedProperties are empty
    const allPropertiesEmpty = Object.values(selectedProperties).every(
      value => value === ''
    )

    if (allPropertiesEmpty) {
      return flightsdetails // Return the original JSON array
    }

    return flightsdetails.filter(obj => {
      // Iterate through each object in the selected properties
      for (const property in selectedProperties) {
        // Check if the object has the selected property
        if (obj.hasOwnProperty(property)) {
          // Check if the value of the property matches the selected value
          if (
            selectedProperties[property] !== '' &&
            obj[property] !== selectedProperties[property]
          ) {
            return false // Exclude the object from the filtered array
          }
        } else {
          return false // Exclude the object from the filtered array
        }
      }
      return true // Include the object in the filtered array
    })
  }

  function geteverythingCount (data) {
    // Assuming you have the array of objects stored in a variable called 'data'
    const countryData = [
      { name: 'Afghanistan', code: 'AF' },
      { name: 'Åland Islands', code: 'AX' },
      { name: 'Albania', code: 'AL' },
      { name: 'Algeria', code: 'DZ' },
      { name: 'American Samoa', code: 'AS' },
      { name: 'AndorrA', code: 'AD' },
      { name: 'Angola', code: 'AO' },
      { name: 'Anguilla', code: 'AI' },
      { name: 'Antarctica', code: 'AQ' },
      { name: 'Antigua and Barbuda', code: 'AG' },
      { name: 'Argentina', code: 'AR' },
      { name: 'Armenia', code: 'AM' },
      { name: 'Aruba', code: 'AW' },
      { name: 'Australia', code: 'AU' },
      { name: 'Austria', code: 'AT' },
      { name: 'Azerbaijan', code: 'AZ' },
      { name: 'Bahamas', code: 'BS' },
      { name: 'Bahrain', code: 'BH' },
      { name: 'Bangladesh', code: 'BD' },
      { name: 'Barbados', code: 'BB' },
      { name: 'Belarus', code: 'BY' },
      { name: 'Belgium', code: 'BE' },
      { name: 'Belize', code: 'BZ' },
      { name: 'Benin', code: 'BJ' },
      { name: 'Bermuda', code: 'BM' },
      { name: 'Bhutan', code: 'BT' },
      { name: 'Bolivia', code: 'BO' },
      { name: 'Bosnia and Herzegovina', code: 'BA' },
      { name: 'Botswana', code: 'BW' },
      { name: 'Bouvet Island', code: 'BV' },
      { name: 'Brazil', code: 'BR' },
      { name: 'British Indian Ocean Territory', code: 'IO' },
      { name: 'Brunei Darussalam', code: 'BN' },
      { name: 'Bulgaria', code: 'BG' },
      { name: 'Burkina Faso', code: 'BF' },
      { name: 'Burundi', code: 'BI' },
      { name: 'Cambodia', code: 'KH' },
      { name: 'Cameroon', code: 'CM' },
      { name: 'Canada', code: 'CA' },
      { name: 'Cape Verde', code: 'CV' },
      { name: 'Cayman Islands', code: 'KY' },
      { name: 'Central African Republic', code: 'CF' },
      { name: 'Chad', code: 'TD' },
      { name: 'Chile', code: 'CL' },
      { name: 'China', code: 'CN' },
      { name: 'Christmas Island', code: 'CX' },
      { name: 'Cocos (Keeling) Islands', code: 'CC' },
      { name: 'Colombia', code: 'CO' },
      { name: 'Comoros', code: 'KM' },
      { name: 'Congo', code: 'CG' },
      { name: 'Congo, The Democratic Republic of the', code: 'CD' },
      { name: 'Cook Islands', code: 'CK' },
      { name: 'Costa Rica', code: 'CR' },
      { name: "Cote D'Ivoire", code: 'CI' },
      { name: 'Croatia', code: 'HR' },
      { name: 'Cuba', code: 'CU' },
      { name: 'Cyprus', code: 'CY' },
      { name: 'Czech Republic', code: 'CZ' },
      { name: 'Denmark', code: 'DK' },
      { name: 'Djibouti', code: 'DJ' },
      { name: 'Dominica', code: 'DM' },
      { name: 'Dominican Republic', code: 'DO' },
      { name: 'Ecuador', code: 'EC' },
      { name: 'Egypt', code: 'EG' },
      { name: 'El Salvador', code: 'SV' },
      { name: 'Equatorial Guinea', code: 'GQ' },
      { name: 'Eritrea', code: 'ER' },
      { name: 'Estonia', code: 'EE' },
      { name: 'Ethiopia', code: 'ET' },
      { name: 'Falkland Islands (Malvinas)', code: 'FK' },
      { name: 'Faroe Islands', code: 'FO' },
      { name: 'Fiji', code: 'FJ' },
      { name: 'Finland', code: 'FI' },
      { name: 'France', code: 'FR' },
      { name: 'French Guiana', code: 'GF' },
      { name: 'French Polynesia', code: 'PF' },
      { name: 'French Southern Territories', code: 'TF' },
      { name: 'Gabon', code: 'GA' },
      { name: 'Gambia', code: 'GM' },
      { name: 'Georgia', code: 'GE' },
      { name: 'Germany', code: 'DE' },
      { name: 'Ghana', code: 'GH' },
      { name: 'Gibraltar', code: 'GI' },
      { name: 'Greece', code: 'GR' },
      { name: 'Greenland', code: 'GL' },
      { name: 'Grenada', code: 'GD' },
      { name: 'Guadeloupe', code: 'GP' },
      { name: 'Guam', code: 'GU' },
      { name: 'Guatemala', code: 'GT' },
      { name: 'Guernsey', code: 'GG' },
      { name: 'Guinea', code: 'GN' },
      { name: 'Guinea-Bissau', code: 'GW' },
      { name: 'Guyana', code: 'GY' },
      { name: 'Haiti', code: 'HT' },
      { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
      { name: 'Holy See (Vatican City State)', code: 'VA' },
      { name: 'Honduras', code: 'HN' },
      { name: 'Hong Kong', code: 'HK' },
      { name: 'Hungary', code: 'HU' },
      { name: 'Iceland', code: 'IS' },
      { name: 'India', code: 'IN' },
      { name: 'Indonesia', code: 'ID' },
      { name: 'Iran, Islamic Republic Of', code: 'IR' },
      { name: 'Iraq', code: 'IQ' },
      { name: 'Ireland', code: 'IE' },
      { name: 'Isle of Man', code: 'IM' },
      { name: 'Israel', code: 'IL' },
      { name: 'Italy', code: 'IT' },
      { name: 'Jamaica', code: 'JM' },
      { name: 'Japan', code: 'JP' },
      { name: 'Jersey', code: 'JE' },
      { name: 'Jordan', code: 'JO' },
      { name: 'Kazakhstan', code: 'KZ' },
      { name: 'Kenya', code: 'KE' },
      { name: 'Kiribati', code: 'KI' },
      { name: "Korea, Democratic People'S Republic of", code: 'KP' },
      { name: 'Korea, Republic of', code: 'KR' },
      { name: 'Kuwait', code: 'KW' },
      { name: 'Kyrgyzstan', code: 'KG' },
      { name: "Lao People'S Democratic Republic", code: 'LA' },
      { name: 'Latvia', code: 'LV' },
      { name: 'Lebanon', code: 'LB' },
      { name: 'Lesotho', code: 'LS' },
      { name: 'Liberia', code: 'LR' },
      { name: 'Libyan Arab Jamahiriya', code: 'LY' },
      { name: 'Liechtenstein', code: 'LI' },
      { name: 'Lithuania', code: 'LT' },
      { name: 'Luxembourg', code: 'LU' },
      { name: 'Macao', code: 'MO' },
      { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
      { name: 'Madagascar', code: 'MG' },
      { name: 'Malawi', code: 'MW' },
      { name: 'Malaysia', code: 'MY' },
      { name: 'Maldives', code: 'MV' },
      { name: 'Mali', code: 'ML' },
      { name: 'Malta', code: 'MT' },
      { name: 'Marshall Islands', code: 'MH' },
      { name: 'Martinique', code: 'MQ' },
      { name: 'Mauritania', code: 'MR' },
      { name: 'Mauritius', code: 'MU' },
      { name: 'Mayotte', code: 'YT' },
      { name: 'Mexico', code: 'MX' },
      { name: 'Micronesia, Federated States of', code: 'FM' },
      { name: 'Moldova, Republic of', code: 'MD' },
      { name: 'Monaco', code: 'MC' },
      { name: 'Mongolia', code: 'MN' },
      { name: 'Montserrat', code: 'MS' },
      { name: 'Morocco', code: 'MA' },
      { name: 'Mozambique', code: 'MZ' },
      { name: 'Myanmar', code: 'MM' },
      { name: 'Namibia', code: 'NA' },
      { name: 'Nauru', code: 'NR' },
      { name: 'Nepal', code: 'NP' },
      { name: 'Netherlands', code: 'NL' },
      { name: 'Netherlands Antilles', code: 'AN' },
      { name: 'New Caledonia', code: 'NC' },
      { name: 'New Zealand', code: 'NZ' },
      { name: 'Nicaragua', code: 'NI' },
      { name: 'Niger', code: 'NE' },
      { name: 'Nigeria', code: 'NG' },
      { name: 'Niue', code: 'NU' },
      { name: 'Norfolk Island', code: 'NF' },
      { name: 'Northern Mariana Islands', code: 'MP' },
      { name: 'Norway', code: 'NO' },
      { name: 'Oman', code: 'OM' },
      { name: 'Pakistan', code: 'PK' },
      { name: 'Palau', code: 'PW' },
      { name: 'Palestinian Territory, Occupied', code: 'PS' },
      { name: 'Panama', code: 'PA' },
      { name: 'Papua New Guinea', code: 'PG' },
      { name: 'Paraguay', code: 'PY' },
      { name: 'Peru', code: 'PE' },
      { name: 'Philippines', code: 'PH' },
      { name: 'Pitcairn', code: 'PN' },
      { name: 'Poland', code: 'PL' },
      { name: 'Portugal', code: 'PT' },
      { name: 'Puerto Rico', code: 'PR' },
      { name: 'Qatar', code: 'QA' },
      { name: 'Reunion', code: 'RE' },
      { name: 'Romania', code: 'RO' },
      { name: 'Russian Federation', code: 'RU' },
      { name: 'RWANDA', code: 'RW' },
      { name: 'Saint Helena', code: 'SH' },
      { name: 'Saint Kitts and Nevis', code: 'KN' },
      { name: 'Saint Lucia', code: 'LC' },
      { name: 'Saint Pierre and Miquelon', code: 'PM' },
      { name: 'Saint Vincent and the Grenadines', code: 'VC' },
      { name: 'Samoa', code: 'WS' },
      { name: 'San Marino', code: 'SM' },
      { name: 'Sao Tome and Principe', code: 'ST' },
      { name: 'Saudi Arabia', code: 'SA' },
      { name: 'Senegal', code: 'SN' },
      { name: 'Serbia and Montenegro', code: 'CS' },
      { name: 'Seychelles', code: 'SC' },
      { name: 'Sierra Leone', code: 'SL' },
      { name: 'Singapore', code: 'SG' },
      { name: 'Slovakia', code: 'SK' },
      { name: 'Slovenia', code: 'SI' },
      { name: 'Solomon Islands', code: 'SB' },
      { name: 'Somalia', code: 'SO' },
      { name: 'South Africa', code: 'ZA' },
      { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
      { name: 'Spain', code: 'ES' },
      { name: 'Sri Lanka', code: 'LK' },
      { name: 'Sudan', code: 'SD' },
      { name: 'Suriname', code: 'SR' },
      { name: 'Svalbard and Jan Mayen', code: 'SJ' },
      { name: 'Swaziland', code: 'SZ' },
      { name: 'Sweden', code: 'SE' },
      { name: 'Switzerland', code: 'CH' },
      { name: 'Syrian Arab Republic', code: 'SY' },
      { name: 'Taiwan, Province of China', code: 'TW' },
      { name: 'Tajikistan', code: 'TJ' },
      { name: 'Tanzania, United Republic of', code: 'TZ' },
      { name: 'Thailand', code: 'TH' },
      { name: 'Timor-Leste', code: 'TL' },
      { name: 'Togo', code: 'TG' },
      { name: 'Tokelau', code: 'TK' },
      { name: 'Tonga', code: 'TO' },
      { name: 'Trinidad and Tobago', code: 'TT' },
      { name: 'Tunisia', code: 'TN' },
      { name: 'Turkey', code: 'TR' },
      { name: 'Turkmenistan', code: 'TM' },
      { name: 'Turks and Caicos Islands', code: 'TC' },
      { name: 'Tuvalu', code: 'TV' },
      { name: 'Uganda', code: 'UG' },
      { name: 'Ukraine', code: 'UA' },
      { name: 'United Arab Emirates', code: 'AE' },
      { name: 'United Kingdom', code: 'GB' },
      { name: 'United States', code: 'US' },
      { name: 'United States Minor Outlying Islands', code: 'UM' },
      { name: 'Uruguay', code: 'UY' },
      { name: 'Uzbekistan', code: 'UZ' },
      { name: 'Vanuatu', code: 'VU' },
      { name: 'Venezuela', code: 'VE' },
      { name: 'Viet Nam', code: 'VN' },
      { name: 'Virgin Islands, British', code: 'VG' },
      { name: 'Virgin Islands, U.S.', code: 'VI' },
      { name: 'Wallis and Futuna', code: 'WF' },
      { name: 'Western Sahara', code: 'EH' },
      { name: 'Yemen', code: 'YE' },
      { name: 'Zambia', code: 'ZM' },
      { name: 'Zimbabwe', code: 'ZW' }
    ]

    const departureCountryCounts = []
    const departureCityCounts = []
    const airportNameCounts = []
    const engineTypeCounts = []
    const manufacturerCounts = []
    const flightModelCounts = []

    // Iterate over the data array
    data.forEach(obj => {
      // Count departure country
      if (obj.DEP_COUNTRY !== '0') {
        const departureCountryCode = obj.DEP_COUNTRY
        const departureCountryName = countryData.find(
          country => country.code === departureCountryCode
        )?.name
        if (departureCountryName) {
          departureCountryCounts[departureCountryName] =
            (departureCountryCounts[departureCountryName] || 0) + 1
        }
      }

      // Count departure city
      if (obj.DEP_CITY !== '0') {
        const departureCity = obj.DEP_CITY
        departureCityCounts[departureCity] =
          (departureCityCounts[departureCity] || 0) + 1
      }

      // Count airport name
      if (obj.DEP_NAME !== '0') {
        const airportName = obj.DEP_NAME
        airportNameCounts[airportName] =
          (airportNameCounts[airportName] || 0) + 1
      }

      // Count flight engine type
      if (obj.ENGINE !== '0') {
        const engineType = obj.ENGINE
        engineTypeCounts[engineType] = (engineTypeCounts[engineType] || 0) + 1
      }

      // Count flight manufacturer
      if (obj.MANUFACTURER !== '0') {
        const manufacturer = obj.MANUFACTURER
        manufacturerCounts[manufacturer] =
          (manufacturerCounts[manufacturer] || 0) + 1
      }

      // Count flight model
      if (obj.MODEL !== '0') {
        const flightModel = obj.MODEL
        flightModelCounts[flightModel] =
          (flightModelCounts[flightModel] || 0) + 1
      }
    })

    // Convert the counts objects into arrays of objects
    const departureCountryArray = Object.entries(departureCountryCounts).map(
      ([key, value]) => ({
        departureCountry: key,
        count: value
      })
    )

    const departureCityArray = Object.entries(departureCityCounts).map(
      ([key, value]) => ({
        departureCity: key,
        count: value
      })
    )

    const airportNameArray = Object.entries(airportNameCounts).map(
      ([key, value]) => ({
        airportName: key,
        count: value
      })
    )

    const engineTypeArray = Object.entries(engineTypeCounts).map(
      ([key, value]) => ({
        engineType: key,
        count: value
      })
    )

    const manufacturerArray = Object.entries(manufacturerCounts).map(
      ([key, value]) => ({
        manufacturer: key,
        count: value
      })
    )

    const flightModelArray = Object.entries(flightModelCounts).map(
      ([key, value]) => ({
        flightModel: key,
        count: value
      })
    )

    // Output the counts array as JSON
    // const countsJson = JSON.stringify(countsArray)

    return [
      departureCountryArray.sort((a, b) => b.count - a.count),
      departureCityArray.sort((a, b) => b.count - a.count),
      airportNameArray.sort((a, b) => b.count - a.count),
      engineTypeArray.sort((a, b) => b.count - a.count),
      manufacturerArray.sort((a, b) => b.count - a.count),
      flightModelArray.sort((a, b) => b.count - a.count)
    ]
  }

  function flightdatawithSomePeriodTime (flightsData) {
    // Assuming you have the array of flight data stored in a variable called 'flightsData'

    // Function to get month name from month index
    const getMonthName = monthIndex => {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      return months[monthIndex]
    }

    // Function to get week number from day of the month
    // const getWeekNumber = dayOfMonth => {
    //   const weekNumber = Math.ceil(dayOfMonth / 7)
    //   return weekNumber + 'st' // You can modify the formatting here for 'st', 'nd', 'rd', 'th' as needed
    // }

    const getDayOfWeek = dayOfWeekIndex => {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      return daysOfWeek[dayOfWeekIndex]
    }

    // Function to get hour range from hour value
    const getHourRange = hour => {
      const startHour = hour
      const endHour = hour + 1
      const formattedStartHour = startHour.toString().padStart(2, '0') + ':00'
      const formattedEndHour = endHour.toString().padStart(2, '0') + ':00'
      return formattedStartHour + ' - ' + formattedEndHour
    }

    // const getWeekNumber = dayOfMonth => {
    //   const weekNumber = Math.ceil(dayOfMonth / 7)
    //   return weekNumber
    // }
    // Function to get week number using moment.js library
    const getWeekNumber = date => {
      return moment(date).isoWeek()
    }

    // Function to get the week range in the format "1st week", "2nd week", etc.
    const getWeekRange = weekNumber => {
      const suffix = getWeekSuffix(weekNumber)
      return `${weekNumber}${suffix} week`
    }
    // Function to get the suffix for the week number (e.g., "st", "nd", "rd", "th")
    const getWeekSuffix = weekNumber => {
      if (weekNumber >= 11 && weekNumber <= 13) {
        return 'th'
      }
      const lastDigit = weekNumber % 10
      switch (lastDigit) {
        case 1:
          return 'st'
        case 2:
          return 'nd'
        case 3:
          return 'rd'
        default:
          return 'th'
      }
    }

    // Map to store the counts for each hour
    const flightsPerHour = new Map()

    // Map to store the counts for each month
    const flightsPerMonth = new Map()

    // Map to store the counts for each day of the week
    const flightsPerDayOfWeek = new Map()
    // Map to store the counts for each week
    const flightsPerWeek = new Map()

    // Iterate over the flight data array
    flightsData.forEach(flight => {
      // Extract the flight number and departure time
      const { DEP_ACTUAL } = flight

      if (DEP_ACTUAL !== '0') {
        // Create a Date object from the departure time string
        const departureDate = new Date(DEP_ACTUAL)

        // Get the hour value from the departure time
        const hour = departureDate.getHours()

        // Update the count for the corresponding hour in the map
        if (flightsPerHour.has(hour)) {
          flightsPerHour.set(hour, flightsPerHour.get(hour) + 1)
        } else {
          flightsPerHour.set(hour, 1)
        }

        // Get the month value from the departure time
        const month = departureDate.getMonth()

        // Update the count for the corresponding month in the map
        if (flightsPerMonth.has(month)) {
          flightsPerMonth.set(month, flightsPerMonth.get(month) + 1)
        } else {
          flightsPerMonth.set(month, 1)
        }

        // Get the day of the week value (0: Sunday, 1: Monday, ..., 6: Saturday)
        const dayOfWeek = departureDate.getDay()

        // Update the count for the corresponding day of the week in the map
        if (flightsPerDayOfWeek.has(dayOfWeek)) {
          flightsPerDayOfWeek.set(
            dayOfWeek,
            flightsPerDayOfWeek.get(dayOfWeek) + 1
          )
        } else {
          flightsPerDayOfWeek.set(dayOfWeek, 1)
        }

        // Get the week number of the year
        const weekNumber = getWeekNumber(departureDate)

        // Update the count for the corresponding week in the map
        if (flightsPerWeek.has(weekNumber)) {
          flightsPerWeek.set(weekNumber, flightsPerWeek.get(weekNumber) + 1)
        } else {
          flightsPerWeek.set(weekNumber, 1)
        }
      }
    })

    // Convert the flightsPerHour map into an array of objects with formatted data
    const flightsPerHourArray = Array.from(flightsPerHour, ([hour, count]) => ({
      hourRange: getHourRange(hour),
      count: count
    }))

    // Convert the flightsPerMonth map into an array of objects with formatted data
    const flightsPerMonthArray = Array.from(
      flightsPerMonth,
      ([month, count]) => ({
        monthName: getMonthName(month),
        count: count
      })
    )

    // Convert the flightsPerDayOfWeek
    // ... (previous code)

    // Convert the flightsPerDayOfWeek map into an array of objects with formatted data
    const flightsPerDayOfWeekArray = Array.from(
      flightsPerDayOfWeek,
      ([dayOfWeek, count]) => ({
        dayOfWeek: getDayOfWeek(dayOfWeek),
        count: count
      })
    )

    // Convert the flightsPerWeek map into an array of objects with formatted data
    const flightsPerWeekArray = Array.from(
      flightsPerWeek,
      ([weekNumber, count]) => ({
        // weeknumber: weekNumber,
        weekRange: getWeekRange(weekNumber),
        count: count
      })
    )

    flightsPerHourArray.sort((a, b) => {
      const [aStartHour, aStartMinute] = a.hourRange.split(':')[0].split(' ')
      const [bStartHour, bStartMinute] = b.hourRange.split(':')[0].split(' ')

      if (aStartHour === bStartHour) {
        // If the start hour is the same, compare the start minutes
        return bStartMinute - aStartMinute
      } else {
        // Compare the start hours
        return bStartHour - aStartHour
      }
    })

    // Extract the list of hours
    const hoursList = Array.from(flightsPerHour.keys())

    // Extract the list of hour ranges
    const hourRangesList = flightsPerHourArray.map(item => item.hourRange)

    // Extract the list of month names
    const monthNamesList = flightsPerMonthArray.map(item => item.monthName)

    // Extract the list of day of week names
    const dayOfWeekNamesList = flightsPerDayOfWeekArray.map(
      item => item.dayOfWeek
    )

    // Extract the list of week ranges
    const weekRangesList = flightsPerWeekArray.map(item => item.weekRange)

    // Extract the count of flights per hour
    const flightsCountPerHour = flightsPerHourArray.map(item => item.count)

    // Extract the count of flights per month
    const flightsCountPerMonth = flightsPerMonthArray.map(item => item.count)

    // Extract the count of flights per day of week
    const flightsCountPerDayOfWeek = flightsPerDayOfWeekArray.map(
      item => item.count
    )

    // Extract the count of flights per week
    const flightsCountPerWeek = flightsPerWeekArray.map(item => item.count)

    flightsPerHourArray.sort((a, b) => b.count - a.count)

    // Sort the flightsPerMonthArray in descending order based on the count
    flightsPerMonthArray.sort((a, b) => b.count - a.count)

    // Sort the flightsPerDayOfWeekArray in descending order based on the count
    flightsPerDayOfWeekArray.sort((a, b) => b.count - a.count)

    // Sort the flightsPerWeekArray in descending order based on the count
    flightsPerWeekArray.sort((a, b) => b.count - a.count)

    return [
      flightsPerHourArray,
      flightsPerMonthArray,
      flightsPerDayOfWeekArray,
      flightsPerWeekArray,
      hoursList,
      hourRangesList,
      monthNamesList,
      dayOfWeekNamesList,
      weekRangesList,
      flightsCountPerHour,
      flightsCountPerMonth,
      flightsCountPerDayOfWeek,
      flightsCountPerWeek
    ]
  }

  // flight yearwise datas

  function flightdatayearwise (flightData) {
    const getFlightCountsPerYearAndMonth = data => {
      const flightCounts = {}

      // Count flights per year and month
      data.forEach(flight => {
        if (flight.DEP_ACTUAL !== '0') {
          const year = moment(flight.DEP_ACTUAL).year()
          const month = moment(flight.DEP_ACTUAL).month()

          if (!flightCounts[year]) {
            flightCounts[year] = Array(12).fill(0)
          }

          flightCounts[year][month]++
        }
      })

      // Create array of year objects with flight counts per month
      const flightCountsPerYearAndMonth = Object.entries(flightCounts).map(
        ([year, counts]) => ({
          year: Number(year),
          value: counts,
          name: moment.months()
        })
      )

      return flightCountsPerYearAndMonth
    }

    // Example usage
    const flightCountsPerYearAndMonth =
      getFlightCountsPerYearAndMonth(flightData)
    // console.log(
    //   'Flight Counts Per Year and Month:',
    //   flightCountsPerYearAndMonth
    // )

    // Example usage
    // const flightsCountPerHour = countFlightsByHour(flightData)
    // console.log('Flights Count Per Hour:', flightsCountPerHour)

    const getFlightCountsPerYearAndWeek = data => {
      const flightCounts = {}

      // Count flights per year and week
      data.forEach(flight => {
        if (flight.DEP_ACTUAL !== '0') {
          const year = moment(flight.DEP_ACTUAL).year()
          const week = moment(flight.DEP_ACTUAL).week()

          if (!flightCounts[year]) {
            flightCounts[year] = {}
          }

          if (!flightCounts[year][week]) {
            flightCounts[year][week] = 0
          }

          flightCounts[year][week]++
        }
      })

      // Create array of year objects with flight counts per week
      const flightCountsPerYearAndWeek = Object.entries(flightCounts).map(
        ([year, weeks]) => {
          const weekCounts = Array(52).fill(0)
          Object.entries(weeks).forEach(([week, count]) => {
            weekCounts[week - 1] = count
          })

          return {
            year: Number(year),
            value: weekCounts,
            name: Array.from({ length: 52 }, (_, i) => `${i + 1}st`)
          }
        }
      )

      return flightCountsPerYearAndWeek
    }

    // Example usage
    const flightCountsPerYearAndWeek = getFlightCountsPerYearAndWeek(flightData)
    // console.log('Flight Counts Per Year and Week:', flightCountsPerYearAndWeek)

    const getFlightCountsPerYearAndHour = data => {
      const flightCounts = {}

      // Count flights per year and hour
      data.forEach(flight => {
        if (flight.DEP_ACTUAL !== '0') {
          const year = moment(flight.DEP_ACTUAL).year()
          const hour = moment(flight.DEP_ACTUAL).format('HH')

          if (!flightCounts[year]) {
            flightCounts[year] = {}
          }

          if (!flightCounts[year][hour]) {
            flightCounts[year][hour] = 0
          }

          flightCounts[year][hour]++
        }
      })

      // Create array of year objects with flight counts per hour
      const flightCountsPerYearAndHour = Object.entries(flightCounts).map(
        ([year, hours]) => {
          const hourCounts = Array(24).fill(0)
          Object.entries(hours).forEach(([hour, count]) => {
            hourCounts[Number(hour)] = count
          })

          const hourNames = Array.from(
            { length: 24 },
            (_, i) =>
              `${i.toString().padStart(2, '0')}:00 - ${(i + 1)
                .toString()
                .padStart(2, '0')}:00`
          )

          return {
            year: Number(year),
            value: hourCounts,
            name: hourNames
          }
        }
      )

      return flightCountsPerYearAndHour
    }

    // Example usage
    const flightCountsPerYearAndHour = getFlightCountsPerYearAndHour(flightData)
    // console.log('Flight Counts Per Year and Hour:', flightCountsPerYearAndHour)

    const getFlightCountsPerYearAndDay = data => {
      const flightCounts = {}

      // Count flights per year and day
      data.forEach(flight => {
        if (flight.DEP_ACTUAL !== '0') {
          const year = moment(flight.DEP_ACTUAL).year()
          const day = moment(flight.DEP_ACTUAL).format('ddd')

          if (!flightCounts[year]) {
            flightCounts[year] = {}
          }

          if (!flightCounts[year][day]) {
            flightCounts[year][day] = 0
          }

          flightCounts[year][day]++
        }
      })

      // Create array of year objects with flight counts per day
      const flightCountsPerYearAndDay = Object.entries(flightCounts).map(
        ([year, days]) => {
          const dayCounts = Array(7).fill(0)
          const dayNames = moment.weekdaysShort()

          Object.entries(days).forEach(([day, count]) => {
            const dayIndex = dayNames.findIndex(
              name => name.toLowerCase() === day.toLowerCase()
            )
            if (dayIndex !== -1) {
              dayCounts[dayIndex] = count
            }
          })

          return {
            year: Number(year),
            value: dayCounts,
            name: dayNames
          }
        }
      )

      return flightCountsPerYearAndDay
    }

    // Example usage
    const flightCountsPerYearAndDay = getFlightCountsPerYearAndDay(flightData)
    // console.log('Flight Counts Per Year and Day:', flightCountsPerYearAndDay)

    // Example usage
    // const year = 2023
    // const month = 0 // January (0-based index)

    // Count flights per month and year
    // const flightsCountPerMonthAndYear = countFlightsByMonthAndYear(flightData)

    // Count flights per week and year
    // const flightsCountPerWeekAndYear = countFlightsByWeekAndYear(flightData)

    // Count flights per day of week, month, and year
    // const flightsCountPerDayOfWeekMonthAndYear =
    //   countFlightsByDayOfWeekMonthAndYear(flightData)

    // Count flights per hour, month, and year
    // const flightsCountPerHourMonthAndYear = countFlightsByHourMonthAndYear(
    //   flightData,
    //   month,
    //   year
    // )

    // console.log(
    //   'Flights Count Per Month and Year:',
    //   flightsCountPerMonthAndYear
    // )
    // console.log('Flights Count Per Week and Year:', flightsCountPerWeekAndYear)
    // console.log(
    //   'Flights Count Per Day of Week, Month, and Year:',
    //   flightsCountPerDayOfWeekMonthAndYear
    // )
    // console.log(
    //   'Flights Count Per Hour, Month, and Year:',
    //   // flightsCountPerHourMonthAndYear
    //   flightsCountPerHour
    // )

    return [
      // flightsCountPerMonthAndYear,
      // flightsCountPerWeekAndYear,
      // flightsCountPerDayOfWeekMonthAndYear,
      // flightsCountPerHourMonthAndYear
      // flightsCountPerHour,
      flightCountsPerYearAndMonth,
      flightCountsPerYearAndWeek,
      flightCountsPerYearAndHour,
      flightCountsPerYearAndDay
    ]
  }

  // fleet details
  function calculateStatistics (flights) {
    // console.log('flights', flights)
    const countMap = {}

    // aircraft class
    flights.forEach(obj => {
      if (obj.ENGINE !== '0') {
        const engineType = obj.ENGINE
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

    // aircraft make
    const countMakeMap = {}
    flights.forEach(obj => {
      if (obj.MANUFACTURER !== '0') {
        const engineType = obj.MANUFACTURER
        countMakeMap[engineType] = countMakeMap[engineType]
          ? countMakeMap[engineType] + 1
          : 1
      }
    })

    // Generate the arrays for engine type names, counts, and percentages
    const namesMakeArray = Object.keys(countMakeMap)
    const countsMakeArray = Object.values(countMakeMap)
    // const totalCount = aircraftArray.length
    const totalMakeCount = countsArray.reduce((sum, count) => sum + count, 0)
    // console.log('total count', totalCount)

    const percentagesmakeArray = countsArray.map(count =>
      Number(((count / totalMakeCount) * 100).toFixed(2))
    )

    const countModelMap = {}

    // aircraft Model
    flights.forEach(obj => {
      if (obj.MODEL !== '0') {
        const engineType = obj.MODEL
        countModelMap[engineType] = countModelMap[engineType]
          ? countModelMap[engineType] + 1
          : 1
      }
    })

    // Generate the arrays for engine type names, counts, and percentages
    const namesModelArray = Object.keys(countModelMap)
    const countsModelArray = Object.values(countModelMap)
    // const totalCount = aircraftArray.length
    const totalModelCount = countsArray.reduce((sum, count) => sum + count, 0)
    // console.log('total count', totalCount)

    const percentagesModelArray = countsArray.map(count =>
      Number(((count / totalModelCount) * 100).toFixed(2))
    )

    // const uniqueEngines = [...new Set(flights.map(flight => flight.ENGINE))]
    // const uniqueManufacturers = [
    //   ...new Set(flights.map(flight => flight.MANUFACTURER))
    // ]
    // const uniqueModels = [...new Set(flights.map(flight => flight.MODEL))]

    // const engineAverageFlyHours = {}
    // const manufacturerAverageFlyHours = {}
    // const modelAverageFlyHours = {}

    // flights.forEach(flight => {
    //   const duration =
    //     typeof flight.DURATION === 'string'
    //       ? parseInt(flight.DURATION, 10)
    //       : flight.DURATION

    //   if (flight.ENGINE !== '0') {
    //     if (!engineAverageFlyHours[flight.ENGINE]) {
    //       engineAverageFlyHours[flight.ENGINE] = {
    //         totalHours: duration,
    //         count: 1
    //       }
    //     } else {
    //       engineAverageFlyHours[flight.ENGINE].totalHours += duration
    //       engineAverageFlyHours[flight.ENGINE].count++
    //     }
    //   }

    //   if (flight.MANUFACTURER !== '0') {
    //     if (!manufacturerAverageFlyHours[flight.MANUFACTURER]) {
    //       manufacturerAverageFlyHours[flight.MANUFACTURER] = {
    //         totalHours: duration,
    //         count: 1
    //       }
    //     } else {
    //       manufacturerAverageFlyHours[flight.MANUFACTURER].totalHours +=
    //         duration
    //       manufacturerAverageFlyHours[flight.MANUFACTURER].count++
    //     }
    //   }

    //   if (flight.MODEL !== '0') {
    //     if (!modelAverageFlyHours[flight.MODEL]) {
    //       modelAverageFlyHours[flight.MODEL] = {
    //         totalHours: duration,
    //         count: 1
    //       }
    //     } else {
    //       modelAverageFlyHours[flight.MODEL].totalHours += duration
    //       modelAverageFlyHours[flight.MODEL].count++
    //     }
    //   }
    // })

    // const engineTypeAverageFlyHours = {}
    // const manufacturerTypeAverageFlyHours = {}
    // const modelTypeAverageFlyHours = {}

    // uniqueEngines.forEach(engine => {
    //   engineTypeAverageFlyHours[engine] = engineAverageFlyHours[engine]
    //     ? engineAverageFlyHours[engine].totalHours /
    //       engineAverageFlyHours[engine].count
    //     : 0
    // })

    // uniqueManufacturers.forEach(manufacturer => {
    //   manufacturerTypeAverageFlyHours[manufacturer] =
    //     manufacturerAverageFlyHours[manufacturer]
    //       ? manufacturerAverageFlyHours[manufacturer].totalHours /
    //         manufacturerAverageFlyHours[manufacturer].count
    //       : 0
    // })

    // uniqueModels.forEach(model => {
    //   modelTypeAverageFlyHours[model] = modelAverageFlyHours[model]
    //     ? modelAverageFlyHours[model].totalHours /
    //       modelAverageFlyHours[model].count
    //     : 0
    // })

    const uniqueEngines = [...new Set(flights.map(flight => flight.ENGINE))]
    const uniqueManufacturers = [
      ...new Set(flights.map(flight => flight.MANUFACTURER))
    ]
    const uniqueModels = [...new Set(flights.map(flight => flight.MODEL))]

    const engineAverageFlyHours = {}
    const manufacturerAverageFlyHours = {}
    const modelAverageFlyHours = {}

    flights.forEach(flight => {
      const duration =
        typeof flight.DURATION === 'string'
          ? parseInt(flight.DURATION, 10)
          : flight.DURATION

      if (!engineAverageFlyHours[flight.ENGINE]) {
        engineAverageFlyHours[flight.ENGINE] = {
          totalHours: duration,
          count: 1
        }
      } else {
        engineAverageFlyHours[flight.ENGINE].totalHours += duration
        engineAverageFlyHours[flight.ENGINE].count++
      }

      if (!manufacturerAverageFlyHours[flight.MANUFACTURER]) {
        manufacturerAverageFlyHours[flight.MANUFACTURER] = {
          totalHours: duration,
          count: 1
        }
      } else {
        manufacturerAverageFlyHours[flight.MANUFACTURER].totalHours += duration
        manufacturerAverageFlyHours[flight.MANUFACTURER].count++
      }

      if (!modelAverageFlyHours[flight.MODEL]) {
        modelAverageFlyHours[flight.MODEL] = {
          totalHours: duration,
          count: 1
        }
      } else {
        modelAverageFlyHours[flight.MODEL].totalHours += duration
        modelAverageFlyHours[flight.MODEL].count++
      }
    })

    const engineTypeAverageFlyHours = {}
    const manufacturerTypeAverageFlyHours = {}
    const modelTypeAverageFlyHours = {}

    uniqueEngines.forEach(engine => {
      const averageHours = engineAverageFlyHours[engine]
        ? (
            engineAverageFlyHours[engine].totalHours /
            engineAverageFlyHours[engine].count
          ).toFixed(2)
        : 0
      engineTypeAverageFlyHours[engine] = Number(averageHours)
    })

    uniqueManufacturers.forEach(manufacturer => {
      const averageHours = manufacturerAverageFlyHours[manufacturer]
        ? (
            manufacturerAverageFlyHours[manufacturer].totalHours /
            manufacturerAverageFlyHours[manufacturer].count
          ).toFixed(2)
        : 0
      manufacturerTypeAverageFlyHours[manufacturer] = Number(averageHours)
    })

    uniqueModels.forEach(model => {
      const averageHours = modelAverageFlyHours[model]
        ? (
            modelAverageFlyHours[model].totalHours /
            modelAverageFlyHours[model].count
          ).toFixed(2)
        : 0
      modelTypeAverageFlyHours[model] = Number(averageHours)
    })

    // return [namesArray,countsArray,percentagesArray,namesMakeArray,countsMakeArray,percentagesmakeArray,namesModelArray,countsModelArray,percentagesModelArray]
    return [
      namesArray,
      countsArray,
      percentagesArray,
      namesMakeArray,
      countsMakeArray,
      percentagesmakeArray,
      namesModelArray,
      countsModelArray,
      percentagesModelArray,
      uniqueEngines,
      uniqueManufacturers,
      uniqueModels,
      Object.values(engineTypeAverageFlyHours),
      Object.values(manufacturerTypeAverageFlyHours),
      Object.values(modelTypeAverageFlyHours)
    ]
  }

  function popularairports (airportData) {
    const transformedData = airportData.reduce((result, item) => {
      const { DEP_NAME, DEP_ACTUAL } = item
      const date = moment(DEP_ACTUAL).format('YYYY-MM-DD')

      // Check if the airport already exists in the result
      const existingEntry = result.find(obj => obj.date === date)

      // if (existingAirport) {
      //   // Increment the count for the existing airport
      //   existingAirport.count += 1
      // } else {
      //   // Create a new airport object
      //   const newAirport = {
      //     DEP_NAME: DEP_NAME,
      //     count: 1,
      //     date: date
      //   }
      //   // Add it to the result
      //   result.push(newAirport)
      // }

      if (existingEntry) {
        existingEntry.count += 1
      } else {
        result.push({
          date,
          count: 1,
          airport: DEP_NAME
        })
      }

      return result
    }, [])

    const busyAirports = transformedData.map(entry => {
      const maxCount = Math.max(...transformedData.map(entry => entry.count))
      const busiestAirport = entry.airport

      return {
        date: entry.date,
        busiestAirport,
        count: maxCount
      }
    })

    return busyAirports
  }

  React.useEffect(() => {
    dispatch(allFlightDetails())
  }, [])

  React.useEffect(() => {
    if (flightsdetails?.length !== 0) {
      const selectedProperties = {
        ENGINE: jetclass,
        MANUFACTURER: manufacture,
        MODEL: model,
        DEP_COUNTRY: countrys
      }

      const filteredArray = filterArray(selectedProperties)
      const filtersedArray = filteredArray.filter(item => {
        return (
          item?.ENGINE !== '0' &&
          item?.MANUFACTURER !== '0' &&
          item?.MODEL !== '0'
        )
      })

      var fleetdata = filteredArray?.filter(item => {
        return (
          item.IS_FLEET == 'Yes' &&
          item?.ENGINE !== '0' &&
          item?.MANUFACTURER !== '0' &&
          item?.MODEL !== '0'
        )
      })
      if (daterange.startDate !== '' && daterange.endDate !== '') {
        const filteredDatess = filtersedArray.filter(item => {
          if (item.DEP_ACTUAL !== '0') {
            const date = moment(item.DEP_ACTUAL)
            return date.isBetween(
              moment(daterange.startDate),
              moment(daterange.endDate),
              null,
              '[]'
            )
          }
        })
        const filteredDatesss = fleetdata.filter(item => {
          if (item.DEP_ACTUAL !== '0') {
            const date = moment(item.DEP_ACTUAL)
            return date.isBetween(
              moment(daterange.startDate),
              moment(daterange.endDate),
              null,
              '[]'
            )
          }
        })
        setFlightDetails(filteredDatesss)
        setFleetData(filteredDatesss)
      } else {
        setFlightDetails(filtersedArray)
        setFleetData(fleetdata)
      }
    }
  }, [
    jetclass,
    manufacture,
    model,
    countrys,
    daterange,
    flightdetails,
    flightsdetails
  ])

  React.useEffect(() => {
    if (flightdetails?.length !== 0) {
      const arrHours = flightdetails.map(items => parseInt(items.DURATION))
      // setHours(arrHours)
      let sum = (prev, cur) => {
        return prev + cur
      }
      const result = arrHours.reduce(sum, 0)
      const finalResult = (result / 60).toFixed()

      setFlightHours(finalResult)

      // Calculate the date range from the last 90 days
      const currentDate = moment()
      const startDate = moment().subtract(90, 'days')

      // Calculate the previous year's corresponding period
      const previousYearStartDate = moment()
        .subtract(1, 'year')
        .subtract(90, 'days')
      const previousYearEndDate = moment().subtract(1, 'year')

      const filterQuaterofthisyear = flightdetails.filter(item => {
        if (item.DEP_ACTUAL !== '0') {
          const date = moment(item.DEP_ACTUAL)
          return date.isBetween(
            moment(startDate),
            moment(currentDate),
            null,
            '[]'
          )
        }
      })
      const filterQuaterofPreviousyear = flightdetails.filter(item => {
        if (item.DEP_ACTUAL !== '0') {
          const date = moment(item.DEP_ACTUAL)
          return date.isBetween(
            moment(previousYearStartDate),
            moment(previousYearEndDate),
            null,
            '[]'
          )
        }
      })

      if (
        filterQuaterofPreviousyear?.length &&
        filterQuaterofthisyear?.length
      ) {
        const percentageImprovement =
          Number(
            (filterQuaterofthisyear?.length -
              filterQuaterofPreviousyear?.length) /
              filterQuaterofPreviousyear?.length
          ) * 100
        setperiodflight(filterQuaterofthisyear)
      }
    }
  }, [flightdetails])

  React.useEffect(() => {
    if (flightdetails?.length !== 0) {
      const arrCountry = flightdetails.map(item => {
        const { DEP_COUNTRY, DEP_CITY, DEP_NAME, ENGINE, MANUFACTURER, MODEL } =
          item
        return { DEP_COUNTRY, DEP_CITY, DEP_NAME, ENGINE, MANUFACTURER, MODEL }
      })

      // setHours(arrCountry)
      const changes = geteverythingCount(arrCountry)
      setChange_type(changes)
    }
  }, [flightdetails])

  // React.useEffect(() => {
  //   if (flightdetails?.length !== 0) {
  //     const arrCountry = flightdetails.map(item => {
  //       const {
  //         FLIGHT_ICAO,
  //         DEP_ACTUAL,
  //         DEP_NAME,
  //         ENGINE,
  //         MANUFACTURER,
  //         MODEL
  //       } = item
  //       return { FLIGHT_ICAO, DEP_ACTUAL }
  //     })

  //     setHours(arrCountry)
  //     const changes = flightdatawithSomePeriodTime(arrCountry)
  //     setDataByTime(changes)
  //   }
  // }, [flightdetails])

  React.useEffect(() => {
    if (flightdetails?.length !== 0) {
      const filterdata = flightsdetails?.map(item => {
        const { ENGINE, MANUFACTURER, MODEL, DEP_COUNTRY } = item
        return { ENGINE, MANUFACTURER, MODEL, DEP_COUNTRY }
      })
      const changes = filtervalueExtractingArray(filterdata)
      setFilters(changes)
    }
  }, [flightdetails])

  React.useEffect(() => {
    if (flightdetails?.length !== 0) {
      const arrCountry = flightdetails.map(item => {
        const {
          FLIGHT_ICAO,
          DEP_ACTUAL,
          DEP_NAME,
          ENGINE,
          MANUFACTURER,
          MODEL
        } = item
        return { FLIGHT_ICAO, DEP_ACTUAL }
      })

      // setHours(arrCountry)
      const changes = flightdatayearwise(arrCountry)
      // setDataByTime(changes)
      setYearwise(changes)
    }
  }, [flightdetails])

  React.useEffect(() => {
    if (flightdetails?.length !== 0) {
      const heatarray = flightdetails.map(item => {
        if (item?.DEP_NAME !== '0') {
          const { DEP_ACTUAL, DEP_NAME } = item
          return { DEP_ACTUAL, DEP_NAME }
        }
      })
      const heatsarr = flightdetails.filter(item => {
        return item?.DEP_ACTUAL !== '0' && item?.DEP_NAME !== '0'
      })

      setRegion(heatsarr)

      const result = popularairports(heatsarr)
      setData(result)
    }
  }, [flightdetails])

  // React.useEffect(() => {
  //   if (flightdetails?.length !== 0) {
  //     var fleetdata = flightsdetails.filter(item => {
  //       return item.IS_FLEET == 'Yes'
  //     })
  //     setFleetData(fleetdata)
  //   }
  // }, [flightdetails, jetclass, model, manufacture, countrys])

  const [pageNumber, setPageNumber] = React.useState(0)
  const [pageCount, setPageCount] = React.useState(5)
  // console.log('pagecount', pageCount)
  // console.log('pages', Math.ceil(change_type?.[0]?.length))

  const blogsPerPage = 6
  const pagesVisited = pageNumber * blogsPerPage
  React.useEffect(() => {
    if (changes_type == 'country') {
      const pagesCount = Math.ceil(change_type?.[0]?.length / blogsPerPage)
      setPageCount(pagesCount)
    } else if (changes_type == 'city') {
      const pagesCount = Math.ceil(change_type?.[1]?.length / blogsPerPage)
      setPageCount(pagesCount)
    } else if (changes_type == 'airport') {
      const pagesCount = Math.ceil(change_type?.[2]?.length / blogsPerPage)
      setPageCount(pagesCount)
    } else if (changes_type == 'engine') {
      const pagesCount = Math.ceil(change_type?.[3]?.length / blogsPerPage)
      setPageCount(pagesCount)
    } else if (changes_type == 'manufactures') {
      const pagesCount = Math.ceil(change_type?.[4]?.length / blogsPerPage)
      setPageCount(pagesCount)
    } else if (changes_type == 'model') {
      const pagesCount = Math.ceil(change_type?.[5]?.length / blogsPerPage)
      setPageCount(pagesCount)
    }
  }, [changes_type, change_type])

  React.useEffect(() => {
    if (fleetsdata?.length !== 0) {
      const arrHours = fleetsdata.map(items => parseInt(items.DURATION))
      // setHours(arrHours)
      let sum = (prev, cur) => {
        return prev + cur
      }
      const result = arrHours.reduce(sum, 0)
      const finalResult = (result / 60).toFixed()

      setfleetFlightHours(finalResult)
    }
  }, [flightdetails, fleetsdata])
  React.useEffect(() => {
    if (fleetsdata?.length !== 0) {
      const fleetsstaticdat = fleetsdata.map(item => {
        const { ENGINE, MANUFACTURER, MODEL, DURATION } = item
        return { ENGINE, MANUFACTURER, MODEL, DURATION }
      })

      const flux = fleetsdata.filter(item => {
        return (
          item?.ENGINE !== '0' &&
          item?.MANUFACTURER !== '0' &&
          item?.MODEL !== '0'
          //  &&
          // item?.DURATION !== '0'
        )
      })

      setdata(flux)

      const result = calculateStatistics(flux)
      setfleetStatics(result)
    }
  }, [fleetsdata])

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <>
      <div div className='container'>
        {/* top section filter */}

        <div className='filter_section'>
          <div className='filter_top_section'>
            <h1 className='filter_heading'>Filters</h1>
            <hr style={{ width: '90%', height: '3px', background: 'black' }} />
          </div>
          <div className='bottom_section'>
            <div className='left_model'>
              <div className='input_select'>
                <label htmlFor='' className='jet_class'>
                  Jet Class
                </label>
                <select
                  name=''
                  id='select_id'
                  onChange={e => setJetclass(e.target.value)}
                >
                  <option value=''>Select</option>
                  {filters?.length !== 0 &&
                    filters?.[0]?.map(item => {
                      return (
                        <>
                          {item?.value !== '0' && (
                            <option value={item?.value}>{item?.value}</option>
                          )}
                        </>
                      )
                    })}
                </select>
              </div>
              <div className='input_select'>
                <label htmlFor='' className='jet_class'>
                  Aircraft Make
                </label>
                <select
                  name=''
                  id='select_id'
                  onChange={e => setManufacture(e.target.value)}
                >
                  <option value=''>Select</option>
                  {filters?.length !== 0 &&
                    filters?.[1]?.map(item => {
                      return (
                        <>
                          {item?.value !== '0' && (
                            <option value={item?.value}>{item?.value}</option>
                          )}
                        </>
                      )
                    })}
                </select>
              </div>
              <div className='input_select'>
                <label htmlFor='' className='jet_class'>
                  Aircraft Model
                </label>
                <select
                  name=''
                  id='select_id'
                  onChange={e => setModel(e.target.value)}
                >
                  <option value=''>Select</option>
                  {filters?.length !== 0 &&
                    filters?.[2]?.map(item => {
                      return (
                        <>
                          {item?.value !== '0' && (
                            <option value={item?.value}>{item?.value}</option>
                          )}
                        </>
                      )
                    })}
                </select>
              </div>
            </div>
            <div className='column_breaker'></div>
            <div className='right_model'>
              {/* <div className='input_select'>
                <label htmlFor='' className='jet_class'>
                  Continent
                </label>
                <select name='' id='select_id' disabled>
                  <option value=''>TurboProp</option>
                  <option value=''>Very Light Jet</option>
                  <option value=''>Light Jet</option>
                  <option value=''>Medium Jet</option>
                  <option value=''>Large Jet</option>
                </select>
              </div> */}
              <div className='input_select'>
                <label htmlFor='' className='jet_class'>
                  Country
                </label>
                <select
                  name=''
                  id='select_id'
                  onChange={e => setCountry(e.target.value)}
                >
                  <option value=''>Select</option>
                  {filters?.length !== 0 &&
                    filters?.[3]?.map(item => {
                      return (
                        <>
                          {item?.value !== '0' && (
                            <option value={item?.value}>
                              {item?.countryName}
                            </option>
                          )}
                        </>
                      )
                    })}
                </select>
              </div>
              <div className='input_selects'>
                <label htmlFor='' className='jet_classs'>
                  Date Range
                </label>
                <div className='date_range'>
                  <div className='start_date'>
                    <label className='start-label'>Start Date:</label>
                    <input
                      type='date'
                      className='date_selection'
                      value={daterange.startDate}
                      onChange={e =>
                        setDaterange({
                          ...daterange,
                          startDate: e.target.value
                        })
                      }
                    />
                  </div>
                  <div className='start_date'>
                    <label className='start-label'>End Date:</label>
                    <input
                      type='date'
                      className='date_selection'
                      value={daterange.endDate}
                      onChange={e =>
                        setDaterange({ ...daterange, endDate: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className='reset_filters' onClick={resetAll}>
            Reset All Filters
          </button>
        </div>

        {/* figures section */}
        <div className='figures_section'>
          <div className='figure_top_sections'>
            <h1 className='figures_heading'>Figures</h1>
            <hr style={{ width: '90%', height: '3px', background: 'black' }} />
          </div>
          <div className='second_section_figure'>
            <div className='left_figure_section'>
              <h4 className='left_figure_heading'>Total Flights</h4>
              <h4 className='left_figure_para'>{flightdetails?.length}</h4>
              <h4 className='left_figure_heading'>Change Vs Prev Period</h4>
              <h4 className='left_figure_para'>0%</h4>
              <h4 className='left_figure_heading'>Change Vs Prev Year</h4>
              <h4 className='left_figure_para'>0%</h4>
            </div>
            <div className='column_breaker'></div>
            <div className='right_figure_section'>
              <h4 className='right_figure_heading'>Total Flight hours</h4>
              <h4 className='left_figure_para'>{flighthours || 0}</h4>
              <h4 className='right_figure_heading'>Change Vs Prev Period</h4>
              <h4 className='right_figure_para'>0%</h4>
              <h4 className='right_figure_heading'>Change Vs Prev Year</h4>
              <h4 className='right_figure_para'>0%</h4>
            </div>
          </div>
          <div className='filter_selection_third_section'>
            <h3
              className='selection_filter_heading'
              onClick={() => setLineSelection_type('day')}
              style={{
                color: lineselection_type == 'day' ? 'blue' : 'black'
              }}
            >
              Day
            </h3>
            <div className='line_breake_header'></div>
            <h3
              className='selection_filter_heading'
              onClick={() => setLineSelection_type('week')}
              style={{
                color: lineselection_type == 'week' ? 'blue' : 'black'
              }}
            >
              7 Day Trend
            </h3>
            <div className='line_breake_header'></div>
            <h3
              className='selection_filter_heading'
              onClick={() => setLineSelection_type('hour')}
              style={{
                color: lineselection_type == 'hour' ? 'blue' : 'black'
              }}
            >
              Hours Per Aircraft
            </h3>
            <div className='line_breake_header'></div>
            <h3
              className='selection_filter_heading'
              onClick={() => setLineSelection_type('mission')}
              style={{
                color: lineselection_type == 'mission' ? 'blue' : 'black'
              }}
            >
              Mission Distance
            </h3>
            <div className='line_breake_header'></div>
            <h3
              className='selection_filter_heading'
              onClick={() => setLineSelection_type('heatmap')}
              style={{
                color: lineselection_type == 'heatmap' ? 'blue' : 'black'
              }}
            >
              Calender Heatmap
            </h3>
          </div>
          {yearwise?.length !== 0 && lineselection_type == 'day' && (
            <LineChart data={yearwise?.[3]} />
          )}
          {yearwise?.length !== 0 && lineselection_type == 'week' && (
            <LineChart data={yearwise?.[1]} />
          )}
          {yearwise?.length !== 0 && lineselection_type == 'hour' && (
            <LineChart data={yearwise?.[2]} />
          )}
          {/* <LineChart /> */}

          {data?.length !== 0 && lineselection_type == 'heatmap' && (
            <HeatMap data={data} />
          )}
        </div>

        {/* dougnout chart section */}
        <div className='doughnut_section'>
          <div className='doughnut_contanier'>
            <h6 className='dougnut_heading'>Deprature By Region</h6>
            <DoughnutChart />
          </div>
          <div className='doughnut_contanier'>
            <h6 className='dougnut_heading'>Flights By Aircraft Class</h6>
            <AircraftClass />
          </div>
          <div className='doughnut_contanier'>
            <h6 className='dougnut_heading'>Flights By Manufacturer</h6>
            {/* <DoughnutChart /> */}
            <Manufacturer />
          </div>
          <div className='doughnut_contanier'>
            <h6 className='dougnut_heading'>Domestic vs international</h6>
            {/* <DoughnutChart /> */}
            <DomesticandInternational />
          </div>
        </div>

        {/* active fleet */}
        <div className='active_fleet_section'>
          <div className='figure_top_sections'>
            <h1 className='figures_heading'>Active Fleet</h1>
            <hr style={{ width: '80%', height: '3px', background: 'black' }} />
          </div>
          <div className='second_section_figure'>
            <div className='second_section_figure'>
              <div className='left_figure_section'>
                <h4 className='left_figure_heading'>Total Flights</h4>
                <h4 className='left_figure_para'>{fleetsdata?.length || 0}</h4>
              </div>
              <div className='column_breaker'></div>
              <div className='right_figure_section'>
                <h4 className='right_figure_heading'>Total Flight hours</h4>
                <h4 className='right_figure_para'>{flightfleethour || 0}</h4>
              </div>
            </div>
          </div>
          <div className='filter_selection_third_section'>
            <h3
              className='selection_filter_heading'
              onClick={() => setFleettType('class')}
              style={{ color: fleettype == 'class' ? 'blue' : 'black' }}
            >
              Aircraft Class
            </h3>
            <div className='line_breake_header'></div>
            <h3
              className='selection_filter_heading'
              onClick={() => setFleettType('make')}
              style={{ color: fleettype == 'make' ? 'blue' : 'black' }}
            >
              Aircraft Make
            </h3>
            <div className='line_breake_header'></div>
            <h3
              className='selection_filter_heading'
              onClick={() => setFleettType('models')}
              style={{ color: fleettype == 'models' ? 'blue' : 'black' }}
            >
              Aircraft Model
            </h3>
          </div>
          {fleetstatics?.length !== 0 && fleettype == 'class' && (
            <GroupedBar
              name={fleetstatics?.[9]}
              value1={fleetstatics?.[1]}
              value2={fleetstatics?.[12]}
            />
          )}
          {fleetstatics?.length !== 0 && fleettype == 'make' && (
            <GroupedBar
              name={fleetstatics?.[10]}
              value1={fleetstatics?.[4]}
              value2={fleetstatics?.[13]}
            />
          )}
          {fleetstatics?.length !== 0 && fleettype == 'models' && (
            <GroupedBar
              name={fleetstatics?.[11]}
              value1={fleetstatics?.[7]}
              value2={fleetstatics?.[14]}
            />
          )}
        </div>
        <div className='change_section'>
          <div className='figure_top_sections'>
            <h1 className='figures_heading'>Change</h1>
            <hr style={{ width: '80%', height: '3px', background: 'black' }} />
          </div>
          <div className='filter_selection_third_section'>
            <h3
              className='selection_filter_heading'
              onClick={() => setChanges_type('country')}
              style={{ color: changes_type == 'country' ? 'Blue' : 'black' }}
            >
              Country
            </h3>
            <div className='line_breake_header'></div>
            <h3
              className='selection_filter_heading'
              onClick={() => setChanges_type('city')}
              style={{ color: changes_type == 'city' ? 'Blue' : 'black' }}
            >
              City
            </h3>
            <div className='line_breake_header'></div>
            <h3
              className='selection_filter_heading'
              onClick={() => setChanges_type('airport')}
              style={{ color: changes_type == 'airport' ? 'Blue' : 'black' }}
            >
              Airport
            </h3>
            <div className='line_breake_header'></div>
            <h3
              className='selection_filter_heading'
              onClick={() => setChanges_type('engine')}
              style={{ color: changes_type == 'engine' ? 'Blue' : 'black' }}
            >
              Aircraft Class
            </h3>
            <div className='line_breake_header'></div>
            <h3
              className='selection_filter_heading'
              onClick={() => setChanges_type('manufactures')}
              style={{
                color: changes_type == 'manufactures' ? 'Blue' : 'black'
              }}
            >
              Manufacture
            </h3>
            <div className='line_breake_header'></div>
            <h3
              className='selection_filter_heading'
              onClick={() => setChanges_type('model')}
              style={{ color: changes_type == 'model' ? 'Blue' : 'black' }}
            >
              Model
            </h3>
          </div>
          {/* <DataTable /> */}
          <div className='table_type_containers'>
            <hr />
            <div className='table_type_section'>
              <div className='table_6Sectionss'>
                {changes_type == 'country' && (
                  <p className='table_heading'>Country</p>
                )}
                {changes_type == 'city' && (
                  <p className='table_heading'>City</p>
                )}
                {changes_type == 'airport' && (
                  <p className='table_heading'>Airport</p>
                )}
                {changes_type == 'engine' && (
                  <p className='table_heading'>Engine</p>
                )}
                {changes_type == 'manufactures' && (
                  <p className='table_heading'>Manufactures</p>
                )}
                {changes_type == 'model' && (
                  <p className='table_heading'>Model</p>
                )}
              </div>

              <div className='table_6Sectionss'>
                <p className='table_heading'>Departures</p>
              </div>
              <div className='table_6Sectionss'>
                <p className='table_heading'>Change VS Previous Period</p>
              </div>
              <div className='table_6Sectionss'>
                <p className='table_heading'>Change Vs 2022</p>
              </div>
              <div className='table_6Sectionss'>
                <p className='table_heading'>Change Vs 2021</p>
              </div>
              <div className='table_6Sectionss'>
                <p className='table_heading'>Change Vs 2020</p>
              </div>
            </div>
            <hr />
            {change_type.length !== 0 &&
              changes_type == 'country' &&
              change_type?.[0]
                ?.slice(pagesVisited, pagesVisited + blogsPerPage)
                .map(item => {
                  // console.log('item', item)
                  return (
                    <>
                      <div className='table_type_section'>
                        <div className='table_6Sections'>
                          <p className='table_heading'>
                            {item?.departureCountry}
                          </p>
                        </div>

                        <div className='table_6Sections'>
                          <p className='table_heading'>{item?.count}</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>
                            Change VS Previous Period
                          </p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2022</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2021</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2020</p>
                        </div>
                      </div>
                      <hr />
                    </>
                  )
                })}
            {change_type.length !== 0 &&
              changes_type == 'city' &&
              change_type?.[1]
                ?.slice(pagesVisited, pagesVisited + blogsPerPage)
                .map(item => {
                  // console.log('item', item)
                  return (
                    <>
                      <div className='table_type_section'>
                        <div className='table_6Sections'>
                          <p className='table_heading'>{item?.departureCity}</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>{item?.count}</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>
                            Change VS Previous Period
                          </p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2022</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2021</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2020</p>
                        </div>
                      </div>
                      <hr />
                    </>
                  )
                })}
            {change_type.length !== 0 &&
              changes_type == 'airport' &&
              change_type?.[2]
                ?.slice(pagesVisited, pagesVisited + blogsPerPage)
                .map(item => {
                  // console.log('item', item)
                  return (
                    <>
                      <div className='table_type_section'>
                        <div className='table_6Sections'>
                          <p className='table_heading'>{item?.airportName}</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>{item?.count}</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>
                            Change VS Previous Period
                          </p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2022</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2021</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2020</p>
                        </div>
                      </div>
                      <hr />
                    </>
                  )
                })}
            {change_type.length !== 0 &&
              changes_type == 'engine' &&
              change_type?.[3]
                ?.slice(pagesVisited, pagesVisited + blogsPerPage)
                .map(item => {
                  // console.log('item', item)
                  return (
                    <>
                      <div className='table_type_section'>
                        <div className='table_6Sections'>
                          <p className='table_heading'>
                            {
                              item?.engineType
                              // .replace(/\b\w/g, c =>
                              //   c.toUpperCase()
                              // )
                            }
                          </p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>{item?.count}</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>
                            Change VS Previous Period
                          </p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2022</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2021</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2020</p>
                        </div>
                      </div>
                      <hr />
                    </>
                  )
                })}
            {change_type.length !== 0 &&
              changes_type == 'manufactures' &&
              change_type?.[4]
                ?.slice(pagesVisited, pagesVisited + blogsPerPage)
                .map(item => {
                  // console.log('item', item)
                  return (
                    <>
                      <div className='table_type_section'>
                        <div className='table_6Sections'>
                          <p className='table_heading'>{item?.manufacturer}</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>{item?.count}</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>
                            Change VS Previous Period
                          </p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2022</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2021</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2020</p>
                        </div>
                      </div>
                      <hr />
                    </>
                  )
                })}
            {change_type.length !== 0 &&
              changes_type == 'model' &&
              change_type?.[5]
                ?.slice(pagesVisited, pagesVisited + blogsPerPage)
                .map(item => {
                  // console.log('item', item)
                  return (
                    <>
                      <div className='table_type_section'>
                        <div className='table_6Sections'>
                          <p className='table_heading'>{item?.flightModel}</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>{item?.count}</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>
                            Change VS Previous Period
                          </p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2022</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2021</p>
                        </div>
                        <div className='table_6Sections'>
                          <p className='table_heading'>Change Vs 2020</p>
                        </div>
                      </div>
                      <hr />
                    </>
                  )
                })}
          </div>
          <div className='Blogs-Carousel-Track'>
            {pageCount && (
              <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'previousBttn'}
                nextLinkClassName={'nextBttn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
              />
            )}
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  )
}

export default Home
