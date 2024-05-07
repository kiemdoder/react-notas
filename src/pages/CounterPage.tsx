import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCounters, selectCounter, counterByName,
} from '../features/counter/counterSlice';
import styles from '../features/counter/Counter.module.css';
import {RootState} from "../app/store";
import {connect, ConnectedProps} from "react-redux";

interface OwnProps {
  counterName: string;
}

const mapState = (state: RootState, {counterName}: OwnProps) =>({
  counterValue: selectCounter(state, counterName).value
});
const mapDispatch = {
  increment,
  decrement,
  incrementByAmount
}
const connector = connect(mapState, mapDispatch);

// Create a new type that contains the fields from both mapState and mapDispatch. This will be used
// to create the component properties interface definition.
type PropsFromRedux = ConnectedProps<typeof connector>;

interface CounterClassComponentProps extends OwnProps, PropsFromRedux {}
interface CounterClassComponentState {}

class CounterClassComponent_ extends React.Component<CounterClassComponentProps, CounterClassComponentState> {

  render() {
    return (
        <>
          <strong
              onClick={() => this.props.increment(this.props.counterName)}
              className="inc clickable"
          >
            INC: {`${this.props.counterValue}`}
          </strong>

          <br/>

          <strong
              onClick={() => this.props.decrement(this.props.counterName)}
              className="inc clickable"
          >
            DEC: {`${this.props.counterValue}`}
          </strong>

          <br/>

          <strong
              onClick={() => this.props.incrementByAmount({counterName: this.props.counterName, amount: 2})}
              className="inc clickable"
          >
            INC 2: {`${this.props.counterValue}`}
          </strong>
        </>
    );
  }
}
const CounterClassComponent = connector(CounterClassComponent_);

export function CounterPage() {
  const counters = useAppSelector(selectCounters);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
        Counter A
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement('A'))}
        >
          -
        </button>
        <span className={styles.value}>{counterByName('A', counters).value}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment('A'))}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount({counterName: 'A', amount: incrementValue}))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>

      <hr/>

        Counter A =&gt;
        <CounterClassComponent counterName="A"/>

        <br/>
        <br/>

        Counter B =&gt;
        <CounterClassComponent counterName="B"/>
    </div>
  );
}
