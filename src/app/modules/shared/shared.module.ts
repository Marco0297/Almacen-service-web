import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MaterialModule} from "./material.module";
import {RouterModule} from "@angular/router";



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
    MaterialModule
  ]
})
export class SharedModule { }
