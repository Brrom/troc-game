import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  title = 'Bienvenue sur Trocgame, le site d\'échange de jeux';

  ngOnInit() {
  }
}
