import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomtreksComponent } from './bottomtreks.component';

describe('BottomtreksComponent', () => {
  let component: BottomtreksComponent;
  let fixture: ComponentFixture<BottomtreksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomtreksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomtreksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
