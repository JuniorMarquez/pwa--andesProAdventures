import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptreksComponent } from './toptreks.component';

describe('ToptreksComponent', () => {
  let component: ToptreksComponent;
  let fixture: ComponentFixture<ToptreksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToptreksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptreksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
