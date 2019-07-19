import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsRegisterComponent } from './js-register.component';

describe('JsRegisterComponent', () => {
  let component: JsRegisterComponent;
  let fixture: ComponentFixture<JsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
