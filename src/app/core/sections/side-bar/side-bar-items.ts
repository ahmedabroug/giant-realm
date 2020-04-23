
export const SIDE_BAR_ROUTES: RouteInfo[] = [
  {
    path: '/stock/dashboard', title: 'Dashboard', icon: 'icon-home', class: 'has-not-arrow', label: '', labelClass: '', extralink: false, submenu: []
  },
  {
    path: '', title: 'Stock Management', icon: 'icon-pencil', class: 'has-arrow', label: '4', labelClass: 'label label-rouded label-themecolor pull-right', extralink: false,
    submenu: [
      { path: '/stock/product', title: 'Product', icon: '', class: '', label: '1', labelClass: 'badge badge-default float-right', extralink: false, submenu: [] },
      { path: '/stock/storage', title: 'Storage', icon: '', class: '', label: '2', labelClass: 'badge badge-warning float-right', extralink: false, submenu: [] },
      { path: '/stock/order', title: 'Order', icon: '', class: '', label: '3', labelClass: 'badge badge-default float-right', extralink: false, submenu: [] },
    ]
  }
];

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  label: string;
  labelClass: string;
  extralink: boolean;
  submenu: RouteInfo[];
}
