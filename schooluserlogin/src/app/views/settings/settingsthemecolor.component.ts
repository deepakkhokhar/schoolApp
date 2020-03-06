import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'settingsthemecolor.component.html'
})
export class SettingThemeColorComponent  implements OnInit {
  
  public color: string = '#2889e9';
  public color2: string = '#3e5974';
  public color3: string = '#bacaa0';
  public color4: string = '#998d98';
  public color5: string = '#354f6a';
  alertsDismiss: any = [];
  constructor(private http: HttpClient,private router:Router,public vcRef: ViewContainerRef, 
    private cpService: ColorPickerService) {}
  ngOnInit() { 
    
   }
   public onChangeColor(color: string) {
    const hsva = this.cpService.stringToHsva(color);
    console.log(color);
  }
  public onChangeColor2(color: string) {
    const hsva2 = this.cpService.stringToHsva(color);
    console.log(color);
  }
  public onChangeColor3(color: string) {
    const hsva2 = this.cpService.stringToHsva(color);
    console.log(color);
  }
  public onChangeColor4(color: string) {
    const hsva2 = this.cpService.stringToHsva(color);
    console.log(color);
  }
  public onChangeColor5(color: string) {
    const hsva2 = this.cpService.stringToHsva(color);
    console.log(color);
  }
  
}
