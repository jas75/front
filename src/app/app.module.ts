import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {BugPage} from "../pages/bug/bug";
import {BugHomePage} from "../pages/bug/bug-content/bug-home/bug-home";
import {BugNewsPage} from "../pages/bug/bug-content/bug-news/bug-news";
import {BugPopPage} from "../pages/bug/bug-content/bug-pop/bug-pop";
import {AddPage} from "../pages/add/add";
import {AddLinkPage} from "../pages/add/add-content/add-link/add-link";
import {AddTextPage} from "../pages/add/add-content/add-text/add-text";
import {NewsapiService} from "../services/newsapi.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BugPage,
    BugHomePage,
    BugNewsPage,
    BugPopPage,
    AddPage,
    AddLinkPage,
    AddTextPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BugPage,
    BugHomePage,
    BugNewsPage,
    BugPopPage,
    AddPage,
    AddLinkPage,
    AddTextPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsapiService
  ]
})
export class AppModule {}
