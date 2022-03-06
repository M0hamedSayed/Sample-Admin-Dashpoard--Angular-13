import { Component, Input, OnInit } from '@angular/core';
import { Speakers } from './_models/speakers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'podcast';
  txtSearch: string = "";
  getText(v: string) {
    this.txtSearch = v;
  }

  ngOnInit(): void {

  }

}
