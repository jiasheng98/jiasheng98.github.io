import * as React from "react";
import defaultState from "./default-state";
import styles from '../styles/ci-calculator.module.css';

function VariablesForm({ onUpdate }) {
  const [state, setState] = React.useState(defaultState);

  const { initialAmount, period, growthRate, monthlyContribution } = state;

  return (
    <section
    className={styles['variables-container']}
    >
      {/* <h2>Financials</h2> */}
      <div className={styles['flex']}>
        <label 
        className={styles['label']}
        htmlFor="initialAmount">
          Initial Amount (USD)
          <input
            className={styles['input']}
            type="number"
            id="initialAmount"
            name="initialAmount"
            value={Number(initialAmount).toString()}
            onChange={({ target }) => setState({ ...state, initialAmount: Number(target.value) })}
          />
        </label>
        <label
           className={styles['label']}
        htmlFor="period">
          Investment Period (Years)
          <input
            className={styles['input']}
            type="number"
            id="period"
            name="period"
            value={Number(period).toString()}
            onChange={({ target }) => setState({ ...state, period: Number(target.value) })}
          />
        </label>
        <label 
        className={styles['label']}
        htmlFor="growthRate">
          Annual Growth Rate (%)
          <input
            className={styles['input']}
            type="number"
            id="growthRate"
            name="growthRate"
            min={70}
            value={Number(growthRate).toString()}
            onChange={({ target }) => setState({ ...state, growthRate: Number(target.value) })}
          />
        </label>
        <label 
           className={styles['label']}
        htmlFor="monthlyContribution">
          Monthly Contribution (USD)
          <input
            className={styles['input']}
            type="number"
            id="monthlyContribution"
            name="monthlyContribution"
            value={Number(monthlyContribution).toString()}
            onChange={({ target }) =>
              setState({ ...state, monthlyContribution: Number(target.value) })
            }
          />
        </label>
      </div>
      <div
       className={styles['button-container']}
      >
      <button 
      className={styles['button']}
      type="button" onClick={() => onUpdate(state)}>
        Update Chart
      </button>
      </div>
    </section>
  );
}

export default VariablesForm;
