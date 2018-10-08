import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsListItemComponent } from './tests-list-item.component';

describe('TestsListItemComponent', () => {
  let component: TestsListItemComponent;
  let fixture: ComponentFixture<TestsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
