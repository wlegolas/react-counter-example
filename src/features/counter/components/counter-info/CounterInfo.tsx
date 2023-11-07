import { useCounter } from '~/features/counter/hooks/useCounter';

export function CounterInfo() {
  const { count } = useCounter();

  return <h2 className="counter__number">Count is: {count}</h2>;
}
