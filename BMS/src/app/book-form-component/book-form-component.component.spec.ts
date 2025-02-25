import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormComponentComponent } from './book-form-component.component';

describe('BookFormComponentComponent', () => {
  let component: BookFormComponentComponent;
  let fixture: ComponentFixture<BookFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
