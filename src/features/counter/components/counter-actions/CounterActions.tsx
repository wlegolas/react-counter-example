import { useCounter } from '~/features/counter/hooks/useCounter';

export function CounterActions() {
  const { increase, decrease, reset, canDecrease } = useCounter();

  return (
    <div className="counter__actions">
      <button type="button" onClick={increase}>
        Increase
      </button>
      <button type="button" disabled={canDecrease} onClick={decrease}>
        Decrease
      </button>
      <button type="button" disabled={canDecrease} onClick={reset}>
        Reset
      </button>
    </div>
  );
}