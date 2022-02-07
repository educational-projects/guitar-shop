import  faker from 'faker/locale/ru';
import { Comment, Guitar } from '../types/guitar';
import { State } from '../types/state';

const guitarType = ['electro', 'ukulele', 'bass'];
const numberOfString = ['4', '6', '7', '12'];

export const makeFakeComment = (): Comment => ({
  id: faker.datatype.number().toString(),
  userName: faker.name.firstName(),
  advantage: faker.lorem.paragraph(),
  disadvantage: faker.lorem.paragraph(),
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
    guitarLoading: false,
    guitar: null,
    guitarError: false,
    sendCommentLoading: false,
    commentPostStatus: false,
  },
  FILTER: {
    placeholderPriceMin : '',
    placeholderPriceMax : '',
  },
  PAGINATION: {
    currentPage: 1,
  },
  MODAL: {
    openModal: false,
  },
});
