import { APPRoute } from '../../const';

export const MenuType = {
  Catalog: {
    title: 'Каталог',
    link: APPRoute.Catalog,
  },
  Store: {
    title: 'Где купить?',
    link: '#',
  },
  About: {
    title: 'О компании',
    link: '#',
  },
} as const;
