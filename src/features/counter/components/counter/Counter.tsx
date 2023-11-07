import { CounterProvider } from '~/features/counter/counter-context';
import { CounterActions } from '~/features/counter/components/counter-actions/CounterActions';
import { CounterInfo } from '~/features/counter/components/counter-info/CounterInfo';

export function Counter() {
  return (
    <CounterProvider>
      <div className="counter__container">
        <CounterActions />
        <CounterInfo />
      </div>
    </CounterProvider>
  );
}
