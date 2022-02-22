import { render, screen } from '@testing-library/react';
import Modal from './modal';

const onClose = jest.fn();
describe('Component: Modal', () => {
  it('should render correctly', () => {
    render(
      <Modal onClose={onClose}>
        <div>Модальное окно</div>
      </Modal>);

    expect(screen
      .getByText('Модальное окно'))
      .toBeInTheDocument();
  });
});
