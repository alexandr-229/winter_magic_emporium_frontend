import { Data, CategoryEnum } from './types';

export const data: Data = {
  [CategoryEnum.Decoration]: {
    text: 'New Year decoration',
    img: '/images/category_decoration.png',
  },
  [CategoryEnum.Gifts]: {
    text: 'Gifts and souvenirs',
    img: '/images/category_gifts.png',
  },
  [CategoryEnum.Costumes]: {
    text: 'Costumes and accessories',
    img: '/images/category_costumes.png',
  },
  [CategoryEnum.Cooking]: {
    text: 'Treats and cooking',
    img: '/images/category_cooking.png',
  },
};
