import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestNgxsComponent } from './compoment/Demo/test-ngxs/test-ngxs.component';
import { UserState } from '../app/models/user/user.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './compoment/nav-bar/nav-bar/nav-bar.component';
import {SideBarComponent} from './compoment/side-bar/side-bar/side-bar.component';

import {MaterialModule} from './marterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    TestNgxsComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgxsModule.forRoot(
      [UserState]
    ),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
