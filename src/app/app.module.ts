import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserService } from "./services/user.service";
import { HttpClientModule } from "@angular/common/http";

import { UserModule } from "./modules/user.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
