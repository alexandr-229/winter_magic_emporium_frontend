import { TagData, ProductTag } from './types';

export const tagsData: TagData = {
  [ProductTag.Available]: {
    color: '#00CA2C',
    text: 'Available',
    width: 75,
  },
  [ProductTag.ToOrder]: {
    color: '#4B2EFF',
    text: 'To order',
    width: 70,
  },
  [ProductTag.Discounts]: {
    color: '#FF2727',
    text: 'Discounts',
    width: 83,
  },
  [ProductTag.NotAvailable]: {
    color: '#FF2727',
    text: 'Not available',
    width: 110,
  },
};
