import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnlineItemComponent } from './create-online-item.component';

describe('CreateOnlineItemComponent', () => {
  let component: CreateOnlineItemComponent;
  let fixture: ComponentFixture<CreateOnlineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOnlineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOnlineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
