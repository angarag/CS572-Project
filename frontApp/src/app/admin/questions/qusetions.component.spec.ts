import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QusetionsComponent } from './questions.component';

describe('QusetionsComponent', () => {
  let component: QusetionsComponent;
  let fixture: ComponentFixture<QusetionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QusetionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QusetionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
