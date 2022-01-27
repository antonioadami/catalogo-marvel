import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing.module';

import { AppBarModule } from './components/AppBar/AppBar.module';
import { SideBarModule } from './components/SideBar/SideBar.module';

import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    MatSidenavModule,

    AppBarModule,
    SideBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
