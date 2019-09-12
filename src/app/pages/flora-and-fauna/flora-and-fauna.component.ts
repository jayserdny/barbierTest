import { Component, OnInit } from '@angular/core';
import {Picture} from '../../models/picture.model';
import {NgxMasonryOptions} from 'ngx-masonry';

@Component({
  selector: 'app-flora-and-fauna',
  templateUrl: './flora-and-fauna.component.html',
  styleUrls: ['./flora-and-fauna.component.scss']
})
export class FloraAndFaunaComponent implements OnInit {

  public pictures: Array<Picture> = [
    new Picture(1, 'assets/images/6FloraPtg_onGreen.jpg'),
    new Picture(1, 'assets/images/BirdBeak_33pct_00050021.jpeg'),
    new Picture(1, 'assets/images/BirdOfParadise_crop25pct_DSCN1619.jpeg'),
    new Picture(1, 'assets/images/BurgundyLily_00040003_MGB.jpg'),
    new Picture(1, 'assets/images/Creation_00050023_MGB_40pct.jpeg'),
    new Picture(1, 'assets/images/FuzzyFish_45pct_DSCN1608.jpeg'),
    new Picture(1, 'assets/images/OrangeOnionLily_00040004_MGB.jpg'),
    new Picture(1, 'assets/images/Orchid_BlueBack_25pct_DSCN1605_MGB.jpeg'),
    new Picture(1, 'assets/images/OrchidsTriplets_AdjAuto_cropped_30pct_1014.jpeg'),
    new Picture(1, 'assets/images/ParrotLobster_20pct_0075.jpeg'),
    new Picture(1, 'assets/images/PolkaDotFish_30pct_00040016_crop.jpeg'),
    new Picture(1, 'assets/images/Sunflower_00040014_crop_rot_33pct.jpeg'),
    new Picture(1, 'assets/images/TripleWhiteOrchid_DSCN0062_cropped_25pct.jpeg')
  ];

  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.2s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true,
    horizontalOrder: true
  };

  masonryImages;
  limit = 15;

  constructor() { }

  ngOnInit() {
    this.masonryImages = this.pictures;
  }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.pictures.slice(0, this.limit);
  }

}
