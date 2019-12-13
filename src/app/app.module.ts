import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {FormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';
import { UpdatecomponentComponent } from './updatecomponent/updatecomponent.component';
import { GetAllComponent } from './get-all/get-all.component';


import { ScheduleinterviewComponent } from './scheduleinterview/scheduleinterview.component';
import { CandidateinfoComponent } from './candidateinfo/candidateinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddcomponentComponent,
    UpdatecomponentComponent,
    GetAllComponent,
    ScheduleinterviewComponent,
    CandidateinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : '', component : HeaderComponent},
      {path : 'addcomponent', component: AddcomponentComponent},
      {path : 'updatecomponent', component : UpdatecomponentComponent},
      {path : 'get-all', component : GetAllComponent},
      {path : 'scheduleinterview', component : ScheduleinterviewComponent},
      {path : 'candidateinfo', component : CandidateinfoComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
