import React from 'react';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <div key={dataPoint.label} className='chart-bar'>
          <div className='chart-bar__inner'>
            <div
              className='chart-bar__fill'
              style={{ height: `${(dataPoint.value / totalMaximum) * 100}%` }}
            ></div>
          </div>
          <div className='chart-bar__label'>{dataPoint.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Chart;
