import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbypublisherComponent } from './viewbypublisher.component';

describe('ViewbypublisherComponent', () => {
  let component: ViewbypublisherComponent;
  let fixture: ComponentFixture<ViewbypublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbypublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbypublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
