import { render, screen } from '@testing-library/react';
import UserComment from './user-comment';
import { makeFakeComment } from '../../../../utils/mock';

const fakeComment = makeFakeComment();

describe('Component: UserComment', () => {
  it('should render correctly', () => {
    render(
      <UserComment currentComment={fakeComment}/>,
    );

    expect(screen.getByText('Достоинства:')).toBeInTheDocument();
    expect(screen.getByText(fakeComment.advantage)).toBeInTheDocument();
    expect(screen.getByText('Недостатки:')).toBeInTheDocument();
    expect(screen.getByText(fakeComment.disadvantage)).toBeInTheDocument();
    expect(screen.getByText('Комментарий:')).toBeInTheDocument();
    expect(screen.getByText(fakeComment.comment)).toBeInTheDocument();
  });
});
