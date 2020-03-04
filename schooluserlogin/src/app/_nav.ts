import { INavData } from '@coreui/angular';
var retrievedObject = localStorage.getItem('userInfo');
    var user=JSON.parse(retrievedObject);
    
    var adminarray;
    
      adminarray=[
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'icon-speedometer'
        }
        
      ];
    
export const navItems: INavData[] = adminarray;
