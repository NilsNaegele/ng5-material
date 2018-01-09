import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundEmailComponent } from './background-email.component';

describe('BackgroundEmailComponent', () => {
  let component: BackgroundEmailComponent;
  let fixture: ComponentFixture<BackgroundEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
