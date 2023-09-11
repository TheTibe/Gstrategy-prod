import { Component } from '@angular/core';

@Component({
  selector: 'app-nft-gifts',
  templateUrl: './nft-gifts.component.html',
  styleUrls: ['./nft-gifts.component.css']
})
export class NftGiftsComponent {
  nftPrizes = [
    {
      name: 'NFT 1',
      image: 'https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960',
      description: 'This is the first NFT prize.',
      prize: 'Rare Item'
    },
    {
      name: 'NFT 2',
      image: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/02/nft-acunados-blockchain-bitcoin-2948520.jpg?tf=3840x',
      description: 'This is the second NFT prize.',
      prize: 'Common Item'
    },
  ];
}
