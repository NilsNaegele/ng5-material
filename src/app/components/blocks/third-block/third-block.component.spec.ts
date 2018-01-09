import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdBlockComponent } from './third-block.component';

describe('ThirdBlockComponent', () => {
  let component: ThirdBlockComponent;
  let fixture: ComponentFixture<ThirdBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
