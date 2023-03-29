import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { ComplaintComponent } from './complaint/complaint.component';
import { Routes, RouterModule, ParamMap } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


const routes: Routes=[
  {path: 'complaint-component', component:ComplaintComponent},
  {path: 'main', component:ClientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    InputTextModule,
    ButtonModule,
    ToastModule,
    InputTextareaModule,
    DropdownModule,
    BrowserAnimationsModule,
    CardModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
