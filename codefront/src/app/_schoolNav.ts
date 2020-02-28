import { INavData } from '@coreui/angular';
import * as jwt_decoder from "jwt-decode";
var dashboard=null
var schoolRole=null
var schoolUserInfo = JSON.parse(localStorage.getItem('schoolUserInfo'));
if(schoolUserInfo){
 var schoolUser =  jwt_decoder(schoolUserInfo)
 if(schoolUser)
 dashboard=schoolUser.dashboard;
 schoolRole=schoolUser.role;
}
    var schoolAdminarray;    
    //school user  //1-accountant,2-academic,3-administrator
   if(dashboard=="schoolDash" && schoolRole==3){

      schoolAdminarray=[
        {
          name: 'DASHBOARD',
          url: '/schools/dashboard',
          icon: 'icon-speedometer'
        } ,
       {
          name: 'SETTINGS',
          url: '/school',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'School Profile',
              url: '/school/listing',
              icon: 'icon-puzzle'
            },
            {
              name: 'System Account',
              url: '/school/add',
              icon: 'icon-puzzle'
            },
            {
              name: 'Manager Users',
              url: '/school/add',
              icon: 'icon-puzzle'
            },
            {
              name: 'Theme settings',
              url: '/school/add',
              icon: 'icon-puzzle'
            }
          ]
        },
        {
          name: 'STUDENTS',
          url: '/school',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Student Registrations',
              url: '/school/listing',
              icon: 'icon-puzzle'
            },
            {
              name: 'Manage Students',
              url: '/school/add',
              icon: 'icon-puzzle'
            },
            {
              name: 'Parents',
              url: '/school/add',
              icon: 'icon-puzzle'
            } 
          ]
        },

        {
          name: 'ACADEMICS',
          url: '/school',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Subjects',
              url: '/school/listing',
              icon: 'icon-puzzle'
            },
            {
              name: 'Classes',
              url: '/school/add',
              icon: 'icon-puzzle'
            },
            {
              name: 'Stream',
              url: '/school/add',
              icon: 'icon-puzzle'
            } ,
            {
              name: 'Academic Year',
              url: '/school/add',
              icon: 'icon-puzzle'
            } ,
            {
              name: 'Academic Terms',
              url: '/school/add',
              icon: 'icon-puzzle'
            } 
          ]
        },

        {
          name: 'RESULTS',
          url: '/school',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Grading System',
              url: '/school/listing',
              icon: 'icon-puzzle'
            },
            {
              name: 'Student Report',
              url: '/school/add',
              icon: 'icon-puzzle'
            },
            {
              name: 'Class Report',
              url: '/school/add',
              icon: 'icon-puzzle'
            } ,
            {
              name: 'Academic Year',
              url: '/school/add',
              icon: 'icon-puzzle'
            } ,
            {
              name: 'Academic Terms',
              url: '/school/add',
              icon: 'icon-puzzle'
            } 
          ]
        },

        {
          name: 'ACCOUNTS',
          url: '/school',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Fees Payments',
              url: '/school/listing',
              icon: 'icon-puzzle'
            },
            {
              name: 'Fees structure',
              url: '/school/add',
              icon: 'icon-puzzle'
            },
            {
              name: 'Fee Category',
              url: '/school/add',
              icon: 'icon-puzzle'
            } ,
            {
              name: 'Student account',
              url: '/school/add',
              icon: 'icon-puzzle'
            } 
          ]
        },

        {
          name: 'EXPENSES',
          url: '/school',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Manage expenses',
              url: '/school/listing',
              icon: 'icon-puzzle'
            },
            {
              name: 'Expense Categories',
              url: '/school/add',
              icon: 'icon-puzzle'
            } 
            
          ]
        },
       {
          name: 'PRESS',
          url: '/expenses',
          icon: 'icon-speedometer',
          children: [
            {
              name: 'Schoool Event',
              url: '/expenses/listing',
              icon: 'icon-puzzle'
            },
            {
              name: 'School News',
              url: '/expenses/add',
              icon: 'icon-puzzle'
            }
          ]
        },

        {
          name: 'REPORTS',
          url: '/expenses',
          icon: 'icon-speedometer',
          children: [
            {
              name: 'Expense Report',
              url: '/expenses/listing',
              icon: 'icon-puzzle'
            },
           
            {
              name: 'Fees Payment Report',
              url: '/expenses/add',
              icon: 'icon-puzzle'
            },
            {
              name: 'Monthly Income Report',
              url: '/expenses/add',
              icon: 'icon-puzzle'
            }
          ]
        },
      ];
    }
export const navItems: INavData[] = schoolAdminarray;
