import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  _opened = true;

  ngOnInit() {
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
