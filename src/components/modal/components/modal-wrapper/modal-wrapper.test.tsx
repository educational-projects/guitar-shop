import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalWrapper from './modal-wrapper';

const fakeHandler = jest.fn();

describe('Component: Modal-Wrapper', () => {
  it('should render correctly', () => {
    render(
      <ModalWrapper onClose={fakeHandler}>
        <div>Модальное окно</div>
      </ModalWrapper>);

    expect(screen
      .getByText('Модальное окно'))
      .toBeInTheDocument();
  });

  it('should call onClose if user presses Esc', () => {
    render(
      <ModalWrapper onClose={fakeHandler}>
        <div>Модальное окно</div>
      </ModalWrapper>);

    userEvent.type(document.body, '{esc}');

    expect(fakeHandler).toBeCalled();
  });
});
