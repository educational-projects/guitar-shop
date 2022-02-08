import { render, screen } from '@testing-library/react';
import Modal from './modal';

describe('Component: Modal', () => {
  it('should render correctly', () => {
    render(
      <Modal>
        <div>Модальное окно</div>
      </Modal>);

    expect(screen
      .getByText('Модальное окно'))
      .toBeInTheDocument();
  });
});
