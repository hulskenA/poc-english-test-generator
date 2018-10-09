import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenItemFormComponent } from './open-item-form.component';

describe('OpenItemFormComponent', () => {
  let component: OpenItemFormComponent;
  let fixture: ComponentFixture<OpenItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
