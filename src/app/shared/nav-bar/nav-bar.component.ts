import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private title = 'M. G. Bennett ART - FLORA & FAUNA';

  constructor() { }

  ngOnInit() {
  }

}
