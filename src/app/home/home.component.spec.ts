import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DetailComponent } from '../detail/detail.component';
import { TagListTableComponent } from '../tag-list-table/tag-list-table.component';
import { TagService } from '../services/tag.service';
import { RoutingModule } from '../app.routing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { APP_BASE_HREF } from '@angular/common';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  @Injectable()
  class MockTagService {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, TagListTableComponent, DetailComponent ],
      imports: [RoutingModule, FormsModule, ChartsModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, {provide: TagService, useValue: MockTagService}],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
