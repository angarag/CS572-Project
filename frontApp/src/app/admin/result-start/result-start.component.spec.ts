import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultStartComponent } from './result-start.component';

describe('ResultStartComponent', () => {
  let component: ResultStartComponent;
  let fixture: ComponentFixture<ResultStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
