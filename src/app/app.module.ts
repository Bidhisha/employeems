import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmplistComponent } from './emplist/emplist.component';
import { employeeservice } from './emp.service';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EmpdetailComponent,
    EmplistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [employeeservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
