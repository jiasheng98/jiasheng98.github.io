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

  return <span>{`${payload[0].value.toFixed(2)}USD`}</span>;
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
      <div style={{width: '100%', marginTop: '2rem', height: '300px'}}>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 30,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f4d2d3" />
            <XAxis dataKey="label" style={{fill: 'white'}}>
              <Label
                value="Years"
                offset={-5}
                position="insideBottom"
                style={{fill: 'white'}}
              />
            </XAxis>
            <YAxis style={{fill: 'white'}} />
            <Tooltip
              content={renderTooltip}
              wrapperStyle={{
                color: 'white',
                backgroundColor: 'black',
                padding: '.5rem 1rem',
                borderRadius: '15px',
              }}
            />
            <Line type="monotone" dataKey="value" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <hr />
      {/* <Summary period={period} data={data} /> */}
    </>
  );
}

export default CompoundInterestChart;
