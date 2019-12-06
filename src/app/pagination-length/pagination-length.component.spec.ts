import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationLengthComponent } from './pagination-length.component';

describe('PaginationLengthComponent', () => {
  let component: PaginationLengthComponent;
  let fixture: ComponentFixture<PaginationLengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationLengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
