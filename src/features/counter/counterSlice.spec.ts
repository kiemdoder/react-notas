import counterReducer, {
  CounterState,
  increment,
  decrement,
  incrementByAmount, counterByName,
} from './counterSlice';
import {enableMapSet} from "immer";

// Enable MapSet plugin for Immer
enableMapSet();

describe('counter reducer', () => {
  const initialState: CounterState = {
    counters: [
      {name: 'A', value: 3, status: 'idle'}
    ]
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      counters: [
        {name: 'A', value: 0, status: 'idle'},
        {name: 'B', value: 0, status: 'idle'}
      ]
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment('A'));
    expect(counterByName('A', actual.counters).value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement('A'));
    expect(counterByName('A', actual.counters).value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount({counterName: 'A', amount: 2}));
    expect(counterByName('A', actual.counters).value).toEqual(5);
  });
});
