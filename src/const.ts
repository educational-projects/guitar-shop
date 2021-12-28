export enum APPRoute {
  Main = '/',
  Product = '/product',
}

export enum APIRoute {
  Guitars = '/guitars?_embed=comments',
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
  },
  Max: {
    label: 'Максимальная цена',
  },
} as const;
