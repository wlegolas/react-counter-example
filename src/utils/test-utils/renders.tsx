import { RenderHookResult, renderHook } from '@testing-library/react';
import { ReactNode } from 'react';

import { CounterProvider } from '~/features/counter';

type RenderWithCounterProviderProps = {
  children: ReactNode;
};

export function renderWithCounterProvider({ children }: RenderWithCounterProviderProps) {
  return <CounterProvider>{children}</CounterProvider>;
}

export const renderHookWithCounterProvider = <TProps, TResult>(render: (props: TProps) => TResult): RenderHookResult<TResult, TProps> =>
  renderHook(render, { wrapper: ({ children }) => <CounterProvider>{children}</CounterProvider> });
