import { useCounter } from '~/features/counter/hooks/useCounter';

export function CounterActions() {
  const { increase, decrease, reset, canDecrease } = useCounter();
  const disableActions = !canDecrease;

  return (
    <div className="counter__actions">
      <button type="button" onClick={increase}>
        Increase
      </button>
      <button type="button" disabled={disableActions} onClick={decrease}>
        Decrease
      </button>
      <button type="button" disabled={disableActions} onClick={reset}>
        Reset
      </button>
    </div>
  );
}