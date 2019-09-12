import { Component, OnInit } from '@angular/core';
import { Picture } from '../../models/picture.model';
import {NgxMasonryOptions} from 'ngx-masonry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pictures: Array<Picture> = [
    new Picture(1, 'assets/images/home/cow_DSCN0064_cropped.jpg'),
    new Picture(2, 'assets/images/home/LargeFlower_33pct_cropDSCN1603.jpg'),
    new Picture(3, 'assets/images/home/Orchid_on_green_crop_25pct_DSCN1624.jpeg'),
    new Picture(4, 'assets/images/home/ParrotLobster_20pct_0075.jpeg'),
    new Picture(5, 'assets/images/home/YellowOrchid_50pct_00050007_MGB.jpeg'),
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
