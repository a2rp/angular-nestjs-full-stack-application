import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingComponent } from './viewing.component';

describe('ViewingComponent', () => {
  let component: ViewingComponent;
  let fixture: ComponentFixture<ViewingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewingComponent]
    });
    fixture = TestBed.createComponent(ViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
