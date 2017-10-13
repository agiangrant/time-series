import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Directive, Injectable } from '@angular/core';

import { DetailComponent } from './detail.component';
import { ActivatedRoute } from '@angular/router';
import { DataPointService } from '../services/data-point.service';
import { IMyDrpOptions } from 'mydaterangepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ChartsModule } from 'ng2-charts';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../app.routing';
import { HomeComponent } from '../home/home.component';
import { TagListTableComponent } from '../tag-list-table/tag-list-table.component';
import { APP_BASE_HREF } from '@angular/common';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  @Directive({
    selector: '[routerLink], [routerLinkActive]'
  })
  class DummyRouterLinkDirective {}

  // we should mock this better for times sake we are not currently testing this
  @Injectable()
  class MockDataPointService {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent, HomeComponent, TagListTableComponent
       ],
       imports: [ ChartsModule,
        MyDateRangePickerModule,
        FormsModule,
        RoutingModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, {provide: DataPointService, useValue: MockDataPointService}],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
