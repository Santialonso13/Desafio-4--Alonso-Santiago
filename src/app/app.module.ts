import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
  
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SharedModule, 

   
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
