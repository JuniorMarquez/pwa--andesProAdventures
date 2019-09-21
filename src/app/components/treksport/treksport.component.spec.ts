import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreksportComponent } from './treksport.component';

describe('TreksportComponent', () => {
  let component: TreksportComponent;
  let fixture: ComponentFixture<TreksportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreksportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreksportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
