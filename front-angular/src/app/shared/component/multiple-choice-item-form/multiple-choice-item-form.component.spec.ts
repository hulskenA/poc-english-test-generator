import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceItemFormComponent } from './multiple-choice-item-form.component';

describe('MultipleChoiceItemFormComponent', () => {
  let component: MultipleChoiceItemFormComponent;
  let fixture: ComponentFixture<MultipleChoiceItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiceItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
