export const GuitarTypeInRussian: {[key: string]: string} = {
  acoustic : 'Акустическая гитара',
  electric: 'Электрогитара',
  ukulele: 'Укулеле',
} as const;

export const DEFAULT_TAB = 'characteristic';

export const TabType = {
  Characteristic: 'characteristic',
  Description: 'description',
} as const;

export const RatingType: {[key: string]: string} = {
  1: 'Ужасно',
  2: 'Плохо',
  3: 'Нормально',
  4: 'Хорошо',
  5: 'Отлично',
} as const;
