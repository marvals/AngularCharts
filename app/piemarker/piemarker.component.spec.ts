import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiemarkerComponent } from './piemarker.component';

describe('PiemarkerComponent', () => {
  let component: PiemarkerComponent;
  let fixture: ComponentFixture<PiemarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiemarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiemarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
