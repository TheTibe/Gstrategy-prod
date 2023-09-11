import { Component } from '@angular/core';

@Component({
  selector: 'app-gift-boxes',
  templateUrl: './gift-boxes.component.html',
  styleUrls: ['./gift-boxes.component.css']
})
export class GiftBoxesComponent {
  giftBoxes = [
    { name: 'Common Box', level: 1 - 3, rarity: 'Common' },
    { name: 'Rare Box', level: 3-5, rarity: 'Rare' },
    { name: 'Epic Box', level: 5, rarity: 'Epic' },
  ];

  freeBoxAvailable = true; 
  openingFreeBox = false; 

  constructor() {
    this.checkFreeBoxAvailability();
  }

  checkFreeBoxAvailability() {
    setInterval(() => {
      this.freeBoxAvailable = true;
    }, 4 * 60 * 60 * 1000); 
  }

  openGiftBox(box: any) {
    if (this.openingFreeBox) {
      this.openingFreeBox = false;
      alert('You opened a free box!');
    } else {
      if (this.canOpenBox(box)) {
        alert(`You opened a ${box.rarity} box!`);
      } else {
        alert(`You don't have enough money to open this box.`);
      }
    }
  }

  canOpenBox(box: any): boolean {
    return true; 
  }

  // Open a free box
  openFreeBox() {
    if (this.freeBoxAvailable) {
      this.openingFreeBox = true;
      this.freeBoxAvailable = false;
      this.openGiftBox({ name: 'Free Box', level: 0, rarity: 'Common' });
    } else {
      alert('You can open 1 case in 1 day.');
    }
  }
}
