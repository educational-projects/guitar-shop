import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import FooterNav from './footer-nav';

const history = createMemoryHistory();

describe('Component: FooterNav', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <FooterNav/>
      </Router>);

    expect(screen.getByText(/Информация/i)).toBeInTheDocument();
    expect(screen.getByText(/Где купить?/i)).toBeInTheDocument();
    expect(screen.getByText(/Блог/i)).toBeInTheDocument();
    expect(screen.getByText(/Вопрос - ответ/i)).toBeInTheDocument();
    expect(screen.getByText(/Возврат/i)).toBeInTheDocument();
    expect(screen.getByText(/Сервис-центры/i)).toBeInTheDocument();
  });
});
