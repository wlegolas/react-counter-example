import { render, screen } from '~/utils/test-utils';
import { generateCountContextResult } from '~/utils/test-utils/generators';
import { useCounter } from '~/features/counter/hooks/useCounter';
import { CounterInfo } from '../CounterInfo';

jest.mock('~/features/counter/hooks/useCounter');

describe('<CounterInfo />', () => {
  const currentCount = 10;
  const useCounterMocked = jest.mocked(useCounter);
  const useCounterMock = generateCountContextResult({ count: currentCount });

  describe('when component is rendered', () => {
    beforeEach(() => {
      useCounterMocked.mockReturnValueOnce(useCounterMock);
    });

    it('shows the text with the count information', () => {
      render(<CounterInfo />);

      const counterInfo = screen.getByRole('heading', { name: `Count is: ${currentCount}` });

      expect(counterInfo).toBeInTheDocument();
    });
  });
});
