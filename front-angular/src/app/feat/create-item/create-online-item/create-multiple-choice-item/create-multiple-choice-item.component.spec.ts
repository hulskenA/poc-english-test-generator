import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMultipleChoiceItemComponent } from './create-multiple-choice-item.component';

describe('CreateMultipleChoiceItemComponent', () => {
  let component: CreateMultipleChoiceItemComponent;
  let fixture: ComponentFixture<CreateMultipleChoiceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMultipleChoiceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMultipleChoiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
