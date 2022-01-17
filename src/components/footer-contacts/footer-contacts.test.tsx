import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import FooterContacts from './footer-contacts';

const history = createMemoryHistory();

describe('Component: FooterContacts', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <FooterContacts/>
      </Router>);

    expect(screen.getByText(/Контакты/i)).toBeInTheDocument();
    expect(screen.getByText(/8-812-500-50-50/i)).toBeInTheDocument();
  });
});
