import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListTableComponent } from './tag-list-table.component';
import { Router, RouterLink } from '@angular/router';
import { TagService } from '../services/tag.service';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';


describe('TagListTableComponent', () => {
  let component: TagListTableComponent;
  let fixture: ComponentFixture<TagListTableComponent>;

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  @Injectable()
  class MockTagService {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagListTableComponent, RouterLink ],
      imports: [FormsModule],
      providers: [{provide: Router, useValue: mockRouter}, {provide: TagService, useValue: MockTagService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('filteredText should filter the input data', () => {
    console.log(component)
    expect(component.changeFilter([{features:["what"]}, {features:["do"]}, {features:["you"]}, {features:["think"]}], "wha").length).toBe(1);
  });

  it('filteredText should not return all input data if nothing matches', () => {
    expect(component.changeFilter([{features:["what"]}, {features:["do"]}, {features:["you"]}, {features:["think"]}], "zqwww?").length).toBe(0);
  });

  it('filteredText should return all when no filteredText is passed', () => {
    expect(component.changeFilter([{features:["what"]}, {features:["do"]}, {features:["you"]}, {features:["think"]}], "").length).toBe(4);
  });

  it('filteredText should return all if text matches all the data passed in', () => {
    expect(component.changeFilter([{features:["Testing"]}, {features:["Breaking"]}, {features:["Fixing"]}], "ing").length).toBe(3);
  })
});
