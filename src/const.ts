export enum APPRoute {
  Main = '/',
  Product = '/product',
  Catalog = '/catalog',
  About = '/about',
  Store = '/store',
  ShopCart = '/shopcart'
}

export enum APIRoute {
  Guitars = '/guitars',
  Comment = '/comments',
  Coupon = '/coupons',
}

export enum APIQuery {
  SortType = '_sort',
  SortOrder = '_order',
  MinPrice = 'price_gte',
  MaxPrice = 'price_lte',
  Type = 'type',
  StringCount = 'stringCount',
  Search = 'name_like',
  Page = '_page',
  Limit = '_limit'
}

export enum HttpCode {
  BadRequest = 400,
}

export enum PageTitle {
  Catalog = 'Каталог гитар',
  ShopCart = 'Корзина',
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
    query: 'price_gte',
  },
  Max: {
    label: 'Максимальная цена',
    name: 'maxPrice',
    query: 'price_lte',
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

export const GuitarTypeInRussian: {[key: string]: string} = {
  acoustic : 'Акустическая гитара',
  electric: 'Электрогитара',
  ukulele: 'Укулеле',
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

export const RatingClass = {
  Catalog: 'product-card__rate',
  Product: 'product-container__rating',
  Comment: 'review__rating-panel',
};

export const KeyCode = {
  Esc: 'Escape',
} as const;

export const FailMessage = {
  PostComment: 'не удалось отправить комментарий',
  PostCoupon: 'не удалось отправить купон, проверьте соединение с интернетом',
} as const;

export const ModalClass = {
  NewComment: 'modal--review',
  CommentSuccess: 'modal--success',
};
