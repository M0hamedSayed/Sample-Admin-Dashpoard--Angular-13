import { Component, OnInit, Input } from '@angular/core';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  isMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
