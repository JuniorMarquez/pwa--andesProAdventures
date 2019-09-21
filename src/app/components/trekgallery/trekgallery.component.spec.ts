import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekgalleryComponent } from './trekgallery.component';

describe('TrekgalleryComponent', () => {
  let component: TrekgalleryComponent;
  let fixture: ComponentFixture<TrekgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
