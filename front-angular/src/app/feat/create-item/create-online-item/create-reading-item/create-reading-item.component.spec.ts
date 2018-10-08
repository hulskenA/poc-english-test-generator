import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReadingItemComponent } from './create-reading-item.component';

describe('CreateReadingItemComponent', () => {
  let component: CreateReadingItemComponent;
  let fixture: ComponentFixture<CreateReadingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReadingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReadingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
