import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundSlantComponent } from './background-slant.component';

describe('BackgroundSlantComponent', () => {
  let component: BackgroundSlantComponent;
  let fixture: ComponentFixture<BackgroundSlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundSlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundSlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
