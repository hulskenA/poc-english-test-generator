import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemGroupComponent } from './create-item-group.component';

describe('CreateItemGroupComponent', () => {
  let component: CreateItemGroupComponent;
  let fixture: ComponentFixture<CreateItemGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItemGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
