import { render, screen, userEvent } from '~/utils/test-utils';
import { generateCountContextResult } from '~/utils/test-utils/generators';
import { useCounter } from '~/features/counter/hooks/useCounter';
import { CounterActions } from '../CounterActions';

jest.mock('~/features/counter/hooks/useCounter');

async function clickOnButton(buttonName: string) {
  const button = screen.getByRole('button', { name: buttonName });

  await userEvent.click(button);
}

describe('<CounterActions />', () => {
  const useCounterMocked = jest.mocked(useCounter);
  const useCounterMock = generateCountContextResult();

  describe('when component is rendered', () => {
    beforeEach(() => {
      useCounterMocked.mockReturnValueOnce(useCounterMock);
    });

    it('shows the Increase button', () => {
      render(<CounterActions />);

      const incrementButton = screen.getByRole('button', { name: 'Increase' });

      expect(incrementButton).toBeInTheDocument();
    });

    it('shows the Decrease button', () => {
      render(<CounterActions />);

      const decreaseButton = screen.getByRole('button', { name: 'Decrease' });

      expect(decreaseButton).toBeInTheDocument();
    });

    it('shows the Reset button', () => {
      render(<CounterActions />);

      const resetButton = screen.getByRole('button', { name: 'Reset' });

      expect(resetButton).toBeInTheDocument();
    });

    describe('and user clicks on the Increase button', () => {
      it('calls the increase method', async () => {
        render(<CounterActions />);

        await clickOnButton('Increase');

        expect(useCounterMock.increase).toHaveBeenCalled();
      });
    });

    describe('and user clicks on the Decrease button', () => {
      it('calls the decrease method', async () => {
        render(<CounterActions />);

        await clickOnButton('Decrease');

        expect(useCounterMock.decrease).toHaveBeenCalled();
      });
    });

    describe('and user clicks on the Reset button', () => {
      it('calls the reset method', async () => {
        render(<CounterActions />);

        await clickOnButton('Reset');

        expect(useCounterMock.reset).toHaveBeenCalled();
      });
    });
  });
});
