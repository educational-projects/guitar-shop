export enum APPRoute {
  Main = '/',
  Product = '/product',
}

export enum APIRoute {
  Guitars = '/guitars',
}

export const SortType = {
  SortPrice: {
    type: 'price',
    label: 'по цене',
  },
  SortRating: {
    type: 'rating',
    label: 'по популярности',
  },
} as const;

export const SortOrder = {
  Up: {
    label: 'По возрастанию',
    type: 'asc',
  },
  Down: {
    label: 'По убыванию',
    type: 'desc',
  },
} as const;

export const PriceType = {
  Min: {
    label: 'Минимальная цена',
    name: 'minPrice',
  },
  Max: {
    label: 'Максимальная цена',
    name: 'maxPrice',
  },
} as const;
