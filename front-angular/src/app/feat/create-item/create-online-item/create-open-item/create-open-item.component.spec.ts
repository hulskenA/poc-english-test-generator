import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpenItemComponent } from './create-open-item.component';

describe('CreateOpenItemComponent', () => {
  let component: CreateOpenItemComponent;
  let fixture: ComponentFixture<CreateOpenItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpenItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
