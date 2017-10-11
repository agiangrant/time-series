import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListTableComponent } from './tag-list-table.component';

describe('TagListTableComponent', () => {
  let component: TagListTableComponent;
  let fixture: ComponentFixture<TagListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagListTableComponent ]
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
});
