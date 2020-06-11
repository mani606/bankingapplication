import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoountSummaryComponent } from './acoount-summary.component';

describe('AcoountSummaryComponent', () => {
  let component: AcoountSummaryComponent;
  let fixture: ComponentFixture<AcoountSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcoountSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcoountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
