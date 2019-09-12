import { Component, OnInit, Input } from '@angular/core';
import {NgxMasonryOptions} from 'ngx-masonry';
import {Picture} from '../../models/picture.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input('imageUrl') public imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
