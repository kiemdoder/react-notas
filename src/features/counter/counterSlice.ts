import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';

export interface IncCounterPayload {
  counterName: string;
  amount: number;
}

export interface Counter {
  name: string;
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

export interface CounterState {
  counters: Counter[];
}

const initialState: CounterState = {
  counters: [
      {name: 'A', value: 0, status: 'idle'},
      {name: 'B', value: 0, status: 'idle'}
  ]
};

export function counterByName(name: string, counters: Counter[]): Counter {
  return counters.find(c => c.name === name);
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      counterByName(action.payload, state.counters).value += 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      counterByName(action.payload, state.counters).value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<IncCounterPayload>) => {
      counterByName(action.payload.counterName, state.counters).value += action.payload.amount;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
/*TODO: fix async reducers
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state, action) => {
        state.counters.get(action.payload).status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.counters.get(action.payload.counterName).status = 'idle';
        state.value += action.payload;
      });
  },
*/
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCounters = (state: RootState) => state.counter.counters;
export const selectCounter = (state: RootState, counterName: string) => counterByName(counterName, state.counter.counters);

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount: number): AppThunk => (
  dispatch,
  getState
) => {
/*TODO: fix async reducers
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
*/
};

export default counterSlice.reducer;
