import { APPRoute } from '../../const';

export const MenuType = {
  Catalog: {
    title: 'Каталог',
    link: APPRoute.Catalog,
  },
  Store: {
    title: 'Где купить?',
    link: APPRoute.Store,
  },
  About: {
    title: 'О компании',
    link: APPRoute.About,
  },
} as const;
