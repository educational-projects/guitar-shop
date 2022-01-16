import { setCurrentPage } from '../action';
import {pagination} from './pagination';

const state = {
  currentPage: 1,
};

describe('Reducer: offers', () => {
  it('without additional parameters should return initial state', () => {
    expect(pagination(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...state});
  });

  it('"should refresh the selected page by selecting the page"', () => {
    const randomPage = Math.floor(Math.random() * 10);
    expect(pagination(state, setCurrentPage(randomPage)))
      .toEqual({...state, currentPage: randomPage});
  });
});
