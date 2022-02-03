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
