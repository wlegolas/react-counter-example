import { render, screen, getButton } from '~/utils/test-utils';
import { App } from '../App';

function renderComponent() {
  render(<App />);
}

describe('<App />', () => {
  describe('when component is rendered', () => {
    it('shows the application title', () => {
      const expectedTitle = 'Counter application';

      renderComponent();

      const header = screen.getByRole('heading', { name: expectedTitle });

      expect(header).toBeInTheDocument();
    });

    it('shows the text with the count information', () => {
      const expectedCountInformation = 'Count is: 0';

      renderComponent();

      const counterInfo = screen.getByRole('heading', { name: expectedCountInformation });

      expect(counterInfo).toBeInTheDocument();
    });

    it('shows the Increase button', () => {
      renderComponent();

      const incrementButton = getButton('Increase');

      expect(incrementButton).toBeInTheDocument();
    });

    it('shows the Decrease button', () => {
      renderComponent();

      const decreaseButton = getButton('Decrease' );

      expect(decreaseButton).toBeInTheDocument();
    });

    it('shows the Reset button', () => {
      renderComponent();

      const resetButton = getButton('Reset');

      expect(resetButton).toBeInTheDocument();
    });
  });
});
