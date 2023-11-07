import { render, screen } from '~/utils/test-utils';
import { AppHeader } from '../AppHeader';

describe('<AppHeader />', () => {
  describe('when component is rendered', () => {
    it('shows the application title', () => {
      const expectedTitle = 'Counter application';

      render(<AppHeader />);

      const header = screen.getByRole('heading', { name: expectedTitle });

      expect(header).toBeInTheDocument();
    });
  });
});
