import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingItemFormComponent } from './reading-item-form.component';

describe('ReadingItemFormComponent', () => {
  let component: ReadingItemFormComponent;
  let fixture: ComponentFixture<ReadingItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
