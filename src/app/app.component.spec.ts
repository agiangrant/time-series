import { TestBed, async } from '@angular/core/testing';
import { ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { TagListTableComponent } from './tag-list-table/tag-list-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ChartsModule } from 'ng2-charts';
import { MyDateRangePickerModule } from 'mydaterangepicker';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        DetailComponent,
        TagListTableComponent
      ],
      imports: [
        RoutingModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastModule,
        ChartsModule,
        MyDateRangePickerModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
