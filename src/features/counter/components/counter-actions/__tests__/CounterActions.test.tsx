import { render, screen, clickOnButton } from '~/utils/test-utils';
import { generateCountContextResult } from '~/utils/test-utils/generators';
import { useCounter } from '~/features/counter/hooks/useCounter';
import { CounterActions } from '../CounterActions';

jest.mock('~/features/counter/hooks/useCounter');

describe('<CounterActions />', () => {
  const useCounterMocked = jest.mocked(useCounter);
  const useCounterMock = generateCountContextResult();

  describe('when component is rendered', () => {
    beforeEach(() => {
      useCounterMocked.mockReturnValueOnce(useCounterMock);
    });

    it('shows the Increase button enabled', () => {
      render(<CounterActions />);

      const incrementButton = screen.getByRole('button', { name: 'Increase' });

      expect(incrementButton).toBeEnabled();
    });

    describe('and user clicks on the Increase button', () => {
      it('calls the increase method', async () => {
        render(<CounterActions />);

        await clickOnButton('Increase');

        expect(useCounterMock.increase).toHaveBeenCalled();
      });
    });

    describe('and the user can decrease the value', () => {
      const mockCanDecrease = generateCountContextResult({ canDecrease: true });

      beforeEach(() => {
        useCounterMocked.mockReset().mockReturnValueOnce(mockCanDecrease);
      });

      it('shows the Decrease button enabled', () => {
        render(<CounterActions />);

        const decreaseButton = screen.getByRole('button', { name: 'Decrease' });

        expect(decreaseButton).toBeEnabled();
      });

      it('shows the Reset button enabled', () => {
        render(<CounterActions />);

        const resetButton = screen.getByRole('button', { name: 'Reset' });

        expect(resetButton).toBeEnabled();
      });

      describe('and user clicks on the Decrease button', () => {
        it('calls the decrease method', async () => {
          render(<CounterActions />);

          await clickOnButton('Decrease');

          expect(mockCanDecrease.decrease).toHaveBeenCalled();
        });
      });

      describe('and user clicks on the Reset button', () => {
        it('calls the reset method', async () => {
          render(<CounterActions />);

          await clickOnButton('Reset');

          expect(mockCanDecrease.reset).toHaveBeenCalled();
        });
      });
    });

    describe('and the user can not decrease the value', () => {
      const mockCanNotDecrease = generateCountContextResult({ canDecrease: false });

      beforeEach(() => {
        useCounterMocked.mockReset().mockReturnValueOnce(mockCanNotDecrease);
      });

      it('shows the Decrease button disabled', () => {
        render(<CounterActions />);

        const decreaseButton = screen.getByRole('button', { name: 'Decrease' });

        expect(decreaseButton).toBeDisabled();
      });

      it('shows the Reset button disabled', () => {
        render(<CounterActions />);

        const resetButton = screen.getByRole('button', { name: 'Reset' });

        expect(resetButton).toBeDisabled();
      });

      describe('and user clicks on the Decrease button', () => {
        it('does not call the decrease method', async () => {
          render(<CounterActions />);

          await clickOnButton('Decrease');

          expect(mockCanNotDecrease.decrease).not.toHaveBeenCalled();
        });
      });

      describe('and user clicks on the Reset button', () => {
        it('does not call the reset method', async () => {
          render(<CounterActions />);

          await clickOnButton('Decrease');

          expect(mockCanNotDecrease.decrease).not.toHaveBeenCalled();
        });
      });
    });
  });
});
