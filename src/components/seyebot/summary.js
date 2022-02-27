import * as React from "react";
import styles from '../styles/ci-calculator.module.css';

function toNumber(value) {
  return value.toLocaleString(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Summary({ period, data }) {
  return (
    <>
      <h2
      className={styles['summary-title']}
      >Summary</h2>
      <p
      className={styles['summary-content']}
      >
        In <span style={{fontFamily: 'GothamBold'}}>{period}</span> years, you will have <span style={{fontFamily: 'GothamBold'}}>{toNumber(data[data.length - 1].value)} USD</span>
      </p>
      <h3
       className={styles['breakdown-title']}
      >Breakdown</h3>
      <table
      className={styles['summary-table']}
      >
        <thead>
          <tr>
            <th scope="col">End of Year</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ label, value }) => (
            <tr key={label}>
              <td>{label}</td>
              <td  style={{fontFamily: 'GothamBold'}}>{value.toLocaleString(2)} USD</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Summary;
