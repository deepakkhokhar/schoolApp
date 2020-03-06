import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  alertsDismiss: any = [];
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit() { 
    
  }
}
