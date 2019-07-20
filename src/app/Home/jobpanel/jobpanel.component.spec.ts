import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpanelComponent } from './jobpanel.component';

describe('JobpanelComponent', () => {
  let component: JobpanelComponent;
  let fixture: ComponentFixture<JobpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
