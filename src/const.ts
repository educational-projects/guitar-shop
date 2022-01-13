export enum APPRoute {
  Main = '/',
  Product = '/product',
}

export enum APIRoute {
  Guitars = '/guitars',
}

export enum APIQuery {
  SortType = '_sort',
  SortOrder = '_order',
  MinPrice = 'price_gte',
  MaxPrice = 'price_lte',
  Type = 'type',
  StringCount = 'stringCount',
  Search = 'name_like',
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

export const GuitarType = {
  Acoustic: {
    name: 'acoustic',
    label: 'Акустические гитары',
  },
  Electric: {
    name: 'electric',
    label: 'Электрогитары',
  },
  Ukulele: {
    name: 'ukulele',
    label: 'Укулеле',
  },
} as const;

export const NumberOfStringType = {
  Four: {
    label: '4',
  },
  Six: {
    label: '6',
  },
  Seven: {
    label: '7',
  },
  Twelve: {
    label: '12',
  },
} as const;
