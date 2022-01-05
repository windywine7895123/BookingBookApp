import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStoreComponent } from './booking-store.component';

describe('BookingStoreComponent', () => {
  let component: BookingStoreComponent;
  let fixture: ComponentFixture<BookingStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
