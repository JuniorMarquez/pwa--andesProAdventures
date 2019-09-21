import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreksliderComponent } from './trekslider.component';

describe('TreksliderComponent', () => {
  let component: TreksliderComponent;
  let fixture: ComponentFixture<TreksliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreksliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreksliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
