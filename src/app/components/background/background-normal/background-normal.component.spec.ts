import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundNormalComponent } from './background-normal.component';

describe('BackgroundNormalComponent', () => {
  let component: BackgroundNormalComponent;
  let fixture: ComponentFixture<BackgroundNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
