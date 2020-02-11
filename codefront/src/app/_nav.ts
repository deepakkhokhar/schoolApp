import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'School',
    url: '/school',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'School listing',
        url: '/school/listing',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add School',
        url: '/school/add',
        icon: 'icon-puzzle'
      }
	  ]
  },{
    name: 'Account',
    url: '/account',
    icon: 'icon-speedometer'
  },{
    name: 'Expenses',
    url: '/expenses',
    icon: 'icon-speedometer'
  },{
    name: 'Reports',
    url: '/reports',
    icon: 'icon-speedometer'
  }
  
];
