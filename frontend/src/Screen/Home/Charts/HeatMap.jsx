import * as React from 'react'
import './Heatmap.css'

const HeatmapCalendar = ({ data }) => {
  console.log('data', data)
  const maxCount = Math.max(...data.map(item => item.count))
  const [tooltipAirport, setTooltipAirport] = React.useState(null)

  const handleCellMouseEnter = airport => {
    setTooltipAirport(airport)
  }

  const handleCellMouseLeave = () => {
    setTooltipAirport(null)
  }

  const getColorForCount = count => {
    const intensity = Math.floor((count / maxCount) * 100)
    return `hsl(130, ${intensity}%, 40%)`
  }
  const startDate = new Date(data[0].date)
  const endDate = new Date(data[data.length - 1].date)
  const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1
  const emptyCellsCount = Math.max(0, 200 - totalDays)

  const emptyCells = Array(emptyCellsCount).fill(null)

  const calendarCells = data.concat(emptyCells).map((item, index) => (
    <div
      key={index}
      className={`calendar-cell ${item ? '' : 'empty'}`}
      style={{
        backgroundColor: item ? getColorForCount(item.count) : 'lightgray'
      }}
      title={item ? item.airport : ''}
    />
  ))

  return (
    <div className='heatmap-calendar'>
      {emptyCells.map((_, index) => (
        <div
          key={`empty-${index}`}
          className='calendar-cell empty'
          //   style={{ backgroundColor: `hsl(0, 0%, ${90 - index}%)` }}
          style={{ background: 'grey' }}
        />
      ))}
      {data.map(item => (
        <>
          <div
            key={item.date}
            className='calendar-cell'
            style={{ backgroundColor: getColorForCount(item.count) }}
            title={`Airport: ${item.busiestAirport}\nCount: ${item.count}\nDate: ${item.date}`}
            // title={`Airport:${item.busiestAirport}
            //   Count:${item.count}
            //   Date:${item.date}
            //   `}
            // onClick={() => handleCellMouseEnter(item.airport)}
            // onMouseLeave={handleCellMouseLeave}
          />
          {/* {tooltipAirport === item.airport && (
            <div className='tooltip'>{item.airport}</div>
          )} */}
        </>
      ))}
    </div>
    // <div className='heatmap-calendar'>{calendarCells}</div>
    // <div className='heatmap'>Het map</div>
  )
}

export default HeatmapCalendar
