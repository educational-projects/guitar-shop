import { render, screen } from '@testing-library/react';
import Price from './price';
import { getFormatPrice } from '../../utils';

describe('Component: Price', () => {
  it('should render correctly', () => {
    const price = 17500;
    const formatPrice = getFormatPrice(price.toString());
    render(
      <Price price={price}/>,
    );

    expect(screen.getByText('Цена:')).toBeInTheDocument();
    expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
    expect(screen.getByText(`${formatPrice} ₽`)).toBeInTheDocument();
  });
});
