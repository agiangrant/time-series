import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ChartsModule } from 'ng2-charts';
import { MyDateRangePickerModule } from 'mydaterangepicker';

import { TagService } from './services/tag.service';
import { DataPointService } from './services/data-point.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { TagListTableComponent } from './tag-list-table/tag-list-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TagListTableComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    ChartsModule,
    MyDateRangePickerModule
  ],
  providers: [
    TagService,
    DataPointService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
