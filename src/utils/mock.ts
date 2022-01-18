import  faker from 'faker/locale/ru';
import { Comment, Guitar } from '../types/guitar';
import { FilterState, State } from '../types/state';

const guitarType = ['electro', 'ukulele', 'bass'];
const numberOfString = ['4', '6', '7', '12'];

export const makeFakeFilter: FilterState = {
  sortType: faker.name.firstName(),
  sortOrder: faker.name.firstName(),
  minPrice:  faker.datatype.number().toString(),
  maxPrice: faker.datatype.number().toString(),
  guitarType: guitarType.slice(0, Math.floor(Math.random() * 4)),
  numberOfString: numberOfString.slice(0, Math.floor(Math.random() * 5)),
};

export const makeFakeComment = (): Comment => ({
  id: faker.datatype.number().toString(),
  userName: faker.name.firstName(),
  advantages: faker.lorem.paragraph(),
  disadvantages: faker.lorem.paragraph(),
  comment: faker.lorem.paragraph(),
  rating: Math.floor(Math.random() * 6),
  createAt: faker.lorem.paragraph(),
  guitarId: faker.datatype.number(),
});

export const makeFakeGuitar = (): Guitar => ({
  id: faker.datatype.number(),
  name: faker.name.firstName(),
  vendorCode: faker.datatype.number().toString(),
  type: guitarType[Math.floor(Math.random() * 3)],
  description: faker.lorem.paragraph(),
  previewImg: faker.image.image(),
  stringCount: Number(numberOfString[Math.floor(Math.random() * 3)]),
  rating: Math.floor(Math.random() * 6),
  price: faker.datatype.number(),
  comments: new Array(5).fill(null).map(() => makeFakeComment()),
});

export const makeFakeStore = (): State => ({
  PRODUCTS: {
    guitarsLoading: false,
    guitarsError: false,
    guitars: [],
    totalGuitars: 20,
    searchGuitarsLoading: false,
    searchGuitarsError: false,
    searchGuitars: [],
  },
  FILTER: {
    sortType: null,
    sortOrder: null,
    minPrice:  null,
    maxPrice: null,
    guitarType: [],
    numberOfString: [],
    placeholderPriceMin : '',
    placeholderPriceMax : '',
  },
  PAGINATION: {
    currentPage: 1,
  },
});
