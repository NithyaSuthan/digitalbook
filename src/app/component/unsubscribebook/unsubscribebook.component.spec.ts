import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribebookComponent } from './unsubscribebook.component';

describe('UnsubscribebookComponent', () => {
  let component: UnsubscribebookComponent;
  let fixture: ComponentFixture<UnsubscribebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
