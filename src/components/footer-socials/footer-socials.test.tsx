import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import FooterSocials from './footer-socials';

const history = createMemoryHistory();

describe('Component: FooterSocials', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <FooterSocials/>
      </Router>);

    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument();
  });
});
