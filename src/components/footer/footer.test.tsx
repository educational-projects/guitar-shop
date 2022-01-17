import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Footer from './footer';

const history = createMemoryHistory();

describe('Component: Footer', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Footer/>
      </Router>);

    expect(screen.getByAltText(/Логотип/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument();
    expect(screen.getByText(/О нас/i)).toBeInTheDocument();
    expect(screen.getByText(/Информация/i)).toBeInTheDocument();
    expect(screen.getByText(/Контакты/i)).toBeInTheDocument();
  });
});
