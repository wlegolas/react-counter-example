import { useCounter } from '~/features/counter/hooks/useCounter';

export function CounterInfo() {
  const { count } = useCounter();

  return (
    <h2>
      Count is: <span className="counter__number">{count}</span>
    </h2>
  );
}
