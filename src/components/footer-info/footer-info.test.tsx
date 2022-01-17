import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import FooterInfo from './footer-info';

const history = createMemoryHistory();

describe('Component: FooterInfo', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <FooterInfo/>
      </Router>);

    expect(screen.getByText(/О нас/i)).toBeInTheDocument();
    expect(screen.getByText(/Магазин гитар/i)).toBeInTheDocument();
  });
});
