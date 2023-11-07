import { useContext } from 'react';

import { CountContext, CountContextResult } from '../counter-context';

export function useCounter(): CountContextResult {
  const context = useContext(CountContext);

  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }

  return context;
}
