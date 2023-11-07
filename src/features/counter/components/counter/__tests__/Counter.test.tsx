import { render, screen, clickOnButton } from '~/utils/test-utils';
import { Counter } from '../Counter';

async function renderWithIncreasedValue(times = 1) {
  renderComponent();

  const clickPromises = Array(times)
    .fill('')
    .map(async () => {
      await clickOnButton('Increase');
    });

  await Promise.all(clickPromises);
}

function renderComponent() {
  render(<Counter />);
}

describe('<Counter />', () => {
  describe('when the component is rendered', () => {
    it('shows the Increase button', () => {
      renderComponent();

      const incrementButton = screen.getByRole('button', { name: 'Increase' });

      expect(incrementButton).toBeInTheDocument();
    });

    it('shows the Decrease button', () => {
      renderComponent();

      const decreaseButton = screen.getByRole('button', { name: 'Decrease' });

      expect(decreaseButton).toBeInTheDocument();
    });

    it('shows the Reset button', () => {
      renderComponent();

      const resetButton = screen.getByRole('button', { name: 'Reset' });

      expect(resetButton).toBeInTheDocument();
    });

    it('shows the count text information with the initial value', () => {
      renderComponent();

      const counterInfo = screen.getByRole('heading', { name: 'Count is: 0' });

      expect(counterInfo).toBeInTheDocument();
    });

    describe('and the user clicks on the Increase button', () => {
      it('shows the count text information with the increased value', async () => {
        const expectedInfo = 'Count is: 1';

        renderComponent();

        await clickOnButton('Increase');

        const counterInfo = screen.getByRole('heading', { name: expectedInfo });

        expect(counterInfo).toBeInTheDocument();
      });
    });

    describe('and there is increased value', () => {
      const increasedValue = 2;

      beforeEach(async () => {
        await renderWithIncreasedValue(increasedValue);
      });

      it('shows the count text information with current increased value', () => {
        const expectedInfo = `Count is: ${increasedValue}`;

        const counterInfo = screen.getByRole('heading', { name: expectedInfo });

        expect(counterInfo).toBeInTheDocument();
      });

      describe('and the user clicks on the Decrease button', () => {
        it('shows the count text information with the decreased value', async () => {
          const expectedInfo = 'Count is: 1';

          await clickOnButton('Decrease');

          const counterInfo = screen.getByRole('heading', { name: expectedInfo });

          expect(counterInfo).toBeInTheDocument();
        });
      });

      describe('and the user clicks on the Reset button', () => {
        it('shows the count text information with initial value', async () => {
          const expectedInfo = 'Count is: 0';

          await clickOnButton('Reset');

          const counterInfo = screen.getByRole('heading', { name: expectedInfo });

          expect(counterInfo).toBeInTheDocument();
        });
      });
    });
  });
});
