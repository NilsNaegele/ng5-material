import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundEmptyComponent } from './background-empty.component';

describe('BackgroundEmptyComponent', () => {
  let component: BackgroundEmptyComponent;
  let fixture: ComponentFixture<BackgroundEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
