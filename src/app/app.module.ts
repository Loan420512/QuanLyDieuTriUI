import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/Home.component'; 
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,           
    RegisterComponent,
    LoginComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
