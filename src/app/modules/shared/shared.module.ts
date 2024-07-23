import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MaterialModule} from "./material.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    SidenavComponent
  ],
  exports:[
    SidenavComponent
  ],

  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
