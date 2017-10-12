import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListTableComponent } from './tag-list-table.component';
import { Router, RouterLink } from '@angular/router';
import { TagService } from '../services/tag.service';
import { FormsModule } from '@angular/forms';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';


describe('TagListTableComponent', () => {
  let component: TagListTableComponent;
  let fixture: ComponentFixture<TagListTableComponent>;

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagListTableComponent, RouterLink ],
      imports: [FormsModule, HttpModule],
      providers: [{provide: Router, useValue: mockRouter}, TagService, Http, ConnectionBackend, ToastsManager, ToastOptions]
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
    expect(component.changeFilter(["what", "do", "you", "think"], "wha")).toBe(["what"]);
  });

  it('filteredText should not return all input data if nothing matches', () => {
    expect(component.changeFilter(["what", "do", "you", "think"], "zwqqq?") === ["what", "do", "you", "think"]).toBeFalsy();
  });

  it('filteredText should return all when no filteredText is passed', () => {
    expect(component.changeFilter(["what", "do", "you", "think"], "") === ["what", "do", "you", "think"]).toBeTruthy();
  });

  it('filteredText should return all if text matches all the data passed in', () => {
    expect(component.changeFilter(["Testing", "Breaking", "Fixing"], "ing") === ["Testing", "Breaking", "Fixing"]).toBeTruthy();
  })
});
