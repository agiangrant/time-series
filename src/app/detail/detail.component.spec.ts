import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { ActivatedRoute, Router } from '@angular/router';
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

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent, HomeComponent, TagListTableComponent
       ],
       imports: [ BrowserAnimationsModule,
        ToastModule,
        ChartsModule,
        MyDateRangePickerModule,
        FormsModule,
        RoutingModule
      ],
      providers: [{provide:Router, useValue: mockRouter}]
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
