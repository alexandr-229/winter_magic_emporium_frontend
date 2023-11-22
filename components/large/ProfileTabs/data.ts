import { OrderHistoryIcon } from '@/assets/icons/profile/order-history';
import { FavoriteGoodsIcon } from '@/assets/icons/profile/favorite-goods';
import { PersonalDataIcon } from '@/assets/icons/profile/personal-data';
import { ChangePasswordIcon } from '@/assets/icons/profile/change-password';
import { LogoutIcon } from '@/assets/icons/profile/logout';
import { Data, TabAlias } from './types';

export const tabsData: Data = [
  {
    text: 'Order history',
    url: '/profile/order-history',
    alias: TabAlias.ORDER_HISTORY,
    icon: OrderHistoryIcon,
  },
  {
    text: 'Favorite goods',
    url: '/profile/favorites-goods',
    alias: TabAlias.FAVORITE_GOODS,
    icon: FavoriteGoodsIcon,
  },
  {
    text: 'Personal data',
    url: '/profile/personal-data',
    alias: TabAlias.PERSONAL_DATA,
    icon: PersonalDataIcon,
  },
  {
    text: 'Change password',
    url: '/profile/password-change',
    alias: TabAlias.CHANGE_PASSWORD,
    icon: ChangePasswordIcon,
  },
  {
    text: 'Logout',
    url: '',
    alias: TabAlias.LOGOUT,
    icon: LogoutIcon,
  },
];
