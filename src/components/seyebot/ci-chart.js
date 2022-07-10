import * as React from 'react';
import {
  Label,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import Summary from './summary';
import styles from '../styles/ci-calculator.module.css';

function renderTooltip({ payload }) {

  if (!payload[0]) {
    return null;
  }

  return <span  style={{fontFamily: 'GothamBold'}}>{abbreviateNumber(payload[0].value.toFixed(0))} USD</span>;
}

function abbreviateNumber(value) {
  var newValue = value;
  if (value >= 1000) {
      var suffixes = ["", "k", "m", "b","t"];
      var suffixNum = Math.floor( (""+value).length/3 );
      var shortValue = '';
      for (var precision = 2; precision >= 1; precision--) {
          shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
          var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
          if (dotLessShortValue.length <= 2) { break; }
      }
      if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
      newValue = shortValue+suffixes[suffixNum];
  }
  return newValue;
}

function CompoundInterestChart({
  initialAmount,
  period,
  growthRate,
  monthlyContribution,
}) {
  const data = React.useMemo(() => {
    const result = [];

    for (let i = 1; i <= period; i++) {
      let lastFutureValue = initialAmount + monthlyContribution * 12;
      if (result.length > 0) {
        lastFutureValue =
          result[result.length - 1].value + monthlyContribution * 12;
      }
      result.push({
        label: `${i}`,
        value: lastFutureValue * Math.pow(1 + growthRate / 100, 1),
      });
    }

    return result;
  }, [initialAmount, period, growthRate, monthlyContribution]);

  return (
    <>
      <h2 className={styles['chart-title']}>Projected Growth</h2>
      <div style={{width: '100%', marginTop: '2rem', height: '300px', overflow: 'hidden'}}>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f4d2d3" />
            <XAxis dataKey="label" style={{fill: 'white', fontSize: '12px'}}>
              <Label
                value="Years"
                offset={-5}
                position="insideBottom"
                style={{fill: 'white'}}
              />
            </XAxis>
            <YAxis style={{fill: 'white', fontSize: '12px'}}/>
            <Tooltip
              content={renderTooltip}
              wrapperStyle={{
                color: 'white',
                backgroundColor: '#DF678C',
                padding: '.5rem 1rem',
                borderRadius: '15px',
                fontSize: '85%'
              }}
              className={styles['chart-tooltip']}
            />
            <Line type="monotone" dataKey="value" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <hr  className={styles['hr']}/>
      <Summary period={period} data={data} />
      {/* <hr  className={styles['hr']}/> */}
    </>
  );
}

export default CompoundInterestChart;
