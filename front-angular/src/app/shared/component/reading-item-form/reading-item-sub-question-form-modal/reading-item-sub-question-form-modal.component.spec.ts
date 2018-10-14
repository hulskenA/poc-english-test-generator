import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingItemSubQuestionFormModalComponent } from './reading-item-sub-question-form-modal.component';

describe('ReadingItemSubQuestionFormModalComponent', () => {
  let component: ReadingItemSubQuestionFormModalComponent;
  let fixture: ComponentFixture<ReadingItemSubQuestionFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingItemSubQuestionFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingItemSubQuestionFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
