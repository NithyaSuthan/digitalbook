import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbyauthorComponent } from './viewbyauthor.component';

describe('ViewbyauthorComponent', () => {
  let component: ViewbyauthorComponent;
  let fixture: ComponentFixture<ViewbyauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbyauthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbyauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
