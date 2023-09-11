import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftGiftsComponent } from './nft-gifts.component';

describe('NftGiftsComponent', () => {
  let component: NftGiftsComponent;
  let fixture: ComponentFixture<NftGiftsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftGiftsComponent]
    });
    fixture = TestBed.createComponent(NftGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
