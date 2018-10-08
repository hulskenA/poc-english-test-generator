import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFileItemComponent } from './import-file-item.component';

describe('ImportFileItemComponent', () => {
  let component: ImportFileItemComponent;
  let fixture: ComponentFixture<ImportFileItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportFileItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
