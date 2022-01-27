import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';

import { AppBarModule } from './components/AppBar/AppBar.module';
import { SideBarModule } from './components/SideBar/SideBar.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { CharactersModule } from './Pages/Characters/Characters.module';
import { SearchingBarModule } from 'src/app/components/SearchingBar/SearchingBar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,

    AppRoutingModule,

    MatSidenavModule,

    AppBarModule,
    SideBarModule,
    CharactersModule,
    SearchingBarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
