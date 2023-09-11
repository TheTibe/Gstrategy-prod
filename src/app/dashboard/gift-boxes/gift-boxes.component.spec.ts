import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftBoxesComponent } from './gift-boxes.component';

describe('GiftBoxesComponent', () => {
  let component: GiftBoxesComponent;
  let fixture: ComponentFixture<GiftBoxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftBoxesComponent]
    });
    fixture = TestBed.createComponent(GiftBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
