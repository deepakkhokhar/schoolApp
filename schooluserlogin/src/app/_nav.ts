import { INavData } from '@coreui/angular';
var retrievedObject = localStorage.getItem('userInfo');
    var user=JSON.parse(retrievedObject);
    console.log(user);
    var adminarray;
    if(user && user.usertype==3){
      adminarray=[
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'icon-speedometer'
        },
        {
          name: 'Settings',
          url: '/settings',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'School Profile',
              url: '/settings/schoolprofile',
              icon: 'icon-puzzle'
            },
            {
              name: 'School Account',
              url: '/settings/schoolaccount',
              icon: 'icon-puzzle'
            },
            {
              name: 'Manager Users',
              url: '/settings/userrolepermission',
              icon: 'icon-puzzle'
            },
            {
              name: 'Theme settings',
              url: '/settings/themecolors',
              icon: 'icon-puzzle'
            }
          ]
        }/*,{
          name: 'Students',
          url: '/student',
          icon: 'icon-puzzle',
          children: [

            {
              name: 'Manage Students',
              url: '/student/listing',
              icon: 'icon-puzzle'
            }
          ]
        }*/,{
          name: 'Academics',
          url: '/academics',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Class listing',
              url: '/academics/classlisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Class',
              url: '/academics/addclass',
              icon: 'icon-puzzle'
            },
           
           /* {
              name: 'Stream listing',
              url: '/academics/streamlisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Stream',
              url: '/academics/addstream',
              icon: 'icon-puzzle'
            },*/
            {
              name: 'Academic Year listing',
              url: '/academics/yearlisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Academic Year',
              url: '/academics/addyear',
              icon: 'icon-puzzle'
            },
            {
              name: 'Academic level listing',
              url: '/academics/levellisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Academic level',
              url: '/academics/addlevel',
              icon: 'icon-puzzle'
            }
          
          ]
        },{
          name: 'Exams and Results',
          url: '/exam',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Grading System',
              url: '/exam/gradinglisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Grade',
              url: '/exam/addgrade',
              icon: 'icon-puzzle'
            },
            {
              name: 'Student Report',
              url: '/exam/printstudentreport',
              icon: 'icon-puzzle'
            },
            {
              name: 'Class (Stream) General report',
              url: '/exam/printclassreport',
              icon: 'icon-puzzle'
            }
          ]
        },{
          name: 'Accounts',
          url: '/account',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Fees Payments',
              url: '/account/feepayments',
              icon: 'icon-puzzle'
            },
            {
              name: 'Fee Category',
              url: '/account/feecategory',
              icon: 'icon-puzzle'
            },
            {
              name: 'Student account ',
              url: '/account/schoollisting',
              icon: 'icon-puzzle'
            }
          ]
        },{
          name: 'EXPENSES',
          url: '/expense',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Expense Categories',
              url: '/expense/category',
              icon: 'icon-puzzle'
            },
            {
              name: 'Manage expenses ',
              url: '/expense/manage',
              icon: 'icon-puzzle'
            }
          ]
        },{
          name: 'EVENTS AND NEWS ',
          url: '/event',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Schoool Event',
              url: '/event/school',
              icon: 'icon-puzzle'
            },
            {
              name: 'School News ',
              url: '/event/schoolnews',
              icon: 'icon-puzzle'
            },
            {
              name: 'Manage Notifications and Parent messages  ',
              url: '/event/notification',
              icon: 'icon-puzzle'
            }
          ]
        },{
          name: 'REPORTS',
          url: '/reports',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Expense Report',
              url: '/reports/expense',
              icon: 'icon-puzzle'
            },
            {
              name: 'Fees Payment Report ',
              url: '/reports/feePayment',
              icon: 'icon-puzzle'
            },
            {
              name: 'Monthly Income Report ',
              url: '/reports/monthlyIncome',
              icon: 'icon-puzzle'
            }
          ]
        }
        
      ];
    }
    else if(user && user.usertype==2){
      adminarray=[
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'icon-speedometer'
        },
       /* {
          name: 'Students',
          url: '/student',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Manage Students',
              url: '/student/listing',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Students',
              url: '/student/addstudent',
              icon: 'icon-puzzle'
            }
          ]
        },*/
        {
          name: 'Academics',
          url: '/academics',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Class listing',
              url: '/academics/classlisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Class',
              url: '/academics/addclass',
              icon: 'icon-puzzle'
            },
           
           /* {
              name: 'Stream listing',
              url: '/academics/streamlisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Stream',
              url: '/academics/addstream',
              icon: 'icon-puzzle'
            },*/
            {
              name: 'Academic Year listing',
              url: '/academics/yearlisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Academic Year',
              url: '/academics/addyear',
              icon: 'icon-puzzle'
            },
            {
              name: 'Academic level listing',
              url: '/academics/levellisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Academic level',
              url: '/academics/addlevel',
              icon: 'icon-puzzle'
            }
          
          ]
        },{
          name: 'Exams and Results',
          url: '/exam',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Grading System',
              url: '/exam/gradinglisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Grade',
              url: '/exam/addgrade',
              icon: 'icon-puzzle'
            },
            {
              name: 'Student Report',
              url: '/exam/printstudentreport',
              icon: 'icon-puzzle'
            },
            {
              name: 'Class (Stream) General report',
              url: '/exam/printclassreport',
              icon: 'icon-puzzle'
            }
          ]
        },{
          name: 'EVENTS AND NEWS ',
          url: '/event',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Schoool Event',
              url: '/event/school',
              icon: 'icon-puzzle'
            },
            {
              name: 'School News ',
              url: '/event/schoolnews',
              icon: 'icon-puzzle'
            },
            {
              name: 'Manage Notifications and Parent messages  ',
              url: '/event/notification',
              icon: 'icon-puzzle'
            }
          ]
        }
        
      ];
    }
    else if(user && user.usertype==1){
      adminarray=[
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'icon-speedometer'
        },
        /*{
          name: 'Students',
          url: '/student',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Manage Students',
              url: '/student/listing',
              icon: 'icon-puzzle'
            }
          ]
        },*/{
          name: 'Academics',
          url: '/academics',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Class listing',
              url: '/academics/classlisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Class',
              url: '/academics/addclass',
              icon: 'icon-puzzle'
            },
           
           /* {
              name: 'Stream listing',
              url: '/academics/streamlisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Stream',
              url: '/academics/addstream',
              icon: 'icon-puzzle'
            },*/
            {
              name: 'Academic Year listing',
              url: '/academics/yearlisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Academic Year',
              url: '/academics/addyear',
              icon: 'icon-puzzle'
            },
            {
              name: 'Academic level listing',
              url: '/academics/levellisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Academic level',
              url: '/academics/addlevel',
              icon: 'icon-puzzle'
            }
          
          ]
        },{
          name: 'Exams and Results',
          url: '/exam',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Grading System',
              url: '/exam/gradinglisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Grade',
              url: '/exam/addgrade',
              icon: 'icon-puzzle'
            },
            {
              name: 'Student Report',
              url: '/exam/printstudentreport',
              icon: 'icon-puzzle'
            },
            {
              name: 'Class (Stream) General report',
              url: '/exam/printclassreport',
              icon: 'icon-puzzle'
            }
          ]
        },{
          name: 'Accounts',
          url: '/account',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Fees Payments',
              url: '/account/feepayments',
              icon: 'icon-puzzle'
            },
            {
              name: 'Fee Category',
              url: '/account/feecategory',
              icon: 'icon-puzzle'
            },
            {
              name: 'Student account ',
              url: '/account/schoollisting',
              icon: 'icon-puzzle'
            }
          ]
        },{
          name: 'EXPENSES',
          url: '/expense',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Expense Categories',
              url: '/expense/category',
              icon: 'icon-puzzle'
            },
            {
              name: 'Manage expenses ',
              url: '/expense/manage',
              icon: 'icon-puzzle'
            }
          ]
        },{
          name: 'EVENTS AND NEWS ',
          url: '/event',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Schoool Event',
              url: '/event/school',
              icon: 'icon-puzzle'
            },
            {
              name: 'School News ',
              url: '/event/schoolnews',
              icon: 'icon-puzzle'
            },
            {
              name: 'Manage Notifications and Parent messages  ',
              url: '/event/notification',
              icon: 'icon-puzzle'
            }
          ]
        },{
          name: 'REPORTS',
          url: '/reports',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Expense Report',
              url: '/reports/expense',
              icon: 'icon-puzzle'
            },
            {
              name: 'Fees Payment Report ',
              url: '/reports/feePayment',
              icon: 'icon-puzzle'
            },
            {
              name: 'Monthly Income Report ',
              url: '/reports/monthlyIncome',
              icon: 'icon-puzzle'
            }
          ]
        }
        
      ];
    }
    else if(user && user.usertype==4){
      adminarray=[
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'icon-speedometer'
        },
       /* {
          name: 'Students',
          url: '/student',
          icon: 'icon-puzzle',
          children: [

            {
              name: 'Manage Students',
              url: '/student/listing',
              icon: 'icon-puzzle'
            }
          ]
        },*/{
          name: 'Academics',
          url: '/academics',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Class listing',
              url: '/academics/classlisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Class',
              url: '/academics/addclass',
              icon: 'icon-puzzle'
            },

            {
              name: 'Academic Year listing',
              url: '/academics/yearlisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Academic Year',
              url: '/academics/addyear',
              icon: 'icon-puzzle'
            },
            {
              name: 'Academic level listing',
              url: '/academics/levellisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Academic level',
              url: '/academics/addlevel',
              icon: 'icon-puzzle'
            }
          
          ]
        },{
          name: 'Exams and Results',
          url: '/exam',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Grading System',
              url: '/exam/gradinglisting',
              icon: 'icon-puzzle'
            },
            {
              name: 'Add Grade',
              url: '/exam/addgrade',
              icon: 'icon-puzzle'
            },
            {
              name: 'Student Report',
              url: '/exam/printstudentreport',
              icon: 'icon-puzzle'
            },
            {
              name: 'Class (Stream) General report',
              url: '/exam/printclassreport',
              icon: 'icon-puzzle'
            }
          ]
        },{
          name: 'EVENTS AND NEWS ',
          url: '/event',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Schoool Event',
              url: '/event/school',
              icon: 'icon-puzzle'
            },
            {
              name: 'School News ',
              url: '/event/schoolnews',
              icon: 'icon-puzzle'
            },
            {
              name: 'Manage Notifications and Parent messages  ',
              url: '/event/notification',
              icon: 'icon-puzzle'
            }
          ]
        }
        
      ];
    }
export const navItems: INavData[] = adminarray;
