import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubscribedbooksComponent } from './viewsubscribedbooks.component';

describe('ViewsubscribedbooksComponent', () => {
  let component: ViewsubscribedbooksComponent;
  let fixture: ComponentFixture<ViewsubscribedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsubscribedbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubscribedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
