import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export enum TabAlias {
  ORDER_HISTORY = 'Order_History',
  FAVORITE_GOODS = 'Favorite_Goods',
  PERSONAL_DATA = 'Personal_Data',
  CHANGE_PASSWORD = 'Change_Password',
  LOGOUT = 'Logout',
}

export type Data = {
  alias: TabAlias;
  text: string;
  url: string;
  icon: FC;
}[];

export interface ProfileTabsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
