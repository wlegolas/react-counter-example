import { ReactNode, createContext, useReducer } from 'react';

export type CountContextResult = {
  count: number;
  canDecrease: boolean;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

type CountReducerAction = {
  type: 'increase' | 'decrease' | 'reset';
};

type CountProviderProps = {
  children: ReactNode;
};

const MINIMUM_VALUE = 0;

const initialState: CountContextResult = {
  count: 0,
  canDecrease: false,
  increase: () => {},
  decrease: () => {},
  reset: () => {},
};

function canDecrease(nextValue: number): boolean {
  return nextValue > MINIMUM_VALUE;
}

function updateStateForIncreaseAction(state: CountContextResult): CountContextResult {
  return {
    ...state,
    count: state.count + 1,
    canDecrease: true,
  };
}

function updateStateForDecreaseAction(state: CountContextResult): CountContextResult {
  const nextValue = state.count - 1;
  const actionIsAllowed = canDecrease(nextValue);

  return {
    ...state,
    count: actionIsAllowed ? nextValue : MINIMUM_VALUE,
    canDecrease: actionIsAllowed,
  };
}

function updateStateForResetAction(state: CountContextResult): CountContextResult {
  return {
    ...state,
    count: MINIMUM_VALUE,
    canDecrease: false,
  };
}

function countReducer(state: CountContextResult, action: CountReducerAction) {
  switch (action.type) {
    case 'increase': {
      return updateStateForIncreaseAction(state);
    }
    case 'decrease': {
      return updateStateForDecreaseAction(state);
    }
    case 'reset': {
      return updateStateForResetAction(state);
    }
    default: {
      throw new Error(`The action ${action.type} is not supported`);
    }
  }
}

export const CountContext = createContext<CountContextResult>(initialState);

export function CounterProvider({ children }: CountProviderProps) {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const value = {
    ...state,
    increase: () => dispatch({ type: 'increase' }),
    decrease: () => dispatch({ type: 'decrease' }),
    reset: () => dispatch({ type: 'reset' }),
  };

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
}
