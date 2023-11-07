import type { CountContextResult } from '~/features/counter/counter-context';

export function generateCountContextResult(values: Partial<CountContextResult> = {}): CountContextResult {
  const baseValues: CountContextResult = {
    count: 0,
    canDecrease: false,
    increase: jest.fn(),
    decrease: jest.fn(),
    reset: jest.fn(),
  };

  return { ...baseValues, ...values };
}
