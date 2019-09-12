import { Component, OnInit } from '@angular/core';
import {Picture} from '../../models/picture.model';
import {NgxMasonryOptions} from 'ngx-masonry';

@Component({
  selector: 'app-small-ptgs',
  templateUrl: './small-ptgs.component.html',
  styleUrls: ['./small-ptgs.component.scss']
})
export class SmallPTGSComponent implements OnInit {

  public pictures: Array<Picture> = [
    new Picture(1, 'assets/images/small-ptgs/BirdOfPara_DSC_0034.jpg'),
    new Picture(2, 'assets/images/small-ptgs/DSC_1513_crop.jpg'),
    new Picture(3, 'assets/images/small-ptgs/DSC_1514_crop.jpg'),
    new Picture(4, 'assets/images/small-ptgs/DSC_1515_rot_0.75_crop_.jpg'),
    new Picture(5, 'assets/images/small-ptgs/Orchid_DSC_0026.jpg'),
    new Picture(6, 'assets/images/small-ptgs/Parrot_DSC_0023_smallptg.jpg'),
    new Picture(7, 'assets/images/small-ptgs/PurpleOrchid_DSC_0027.jpg'),
    new Picture(8, 'assets/images/small-ptgs/SomeBird_DSC_0019.jpg'),
    new Picture(9, 'assets/images/small-ptgs/TwoApples_DSC_0032.jpg'),
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
