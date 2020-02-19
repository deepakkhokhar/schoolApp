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
  },
  {
    name: 'Expense Category',
    url: '/expensecategory',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Category listing',
        url: '/expensecategory/listing',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add Category',
        url: '/expensecategory/add',
        icon: 'icon-puzzle'
      }
	  ]
  },{
    name: 'Expenses',
    url: '/expenses',
    icon: 'icon-speedometer',
    children: [
      {
        name: 'Expense listing',
        url: '/expenses/listing',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add Expense',
        url: '/expenses/add',
        icon: 'icon-puzzle'
      }
	  ]
  },{
    name: 'Reports',
    url: '/reports',
    icon: 'icon-speedometer'
  }
  
];
