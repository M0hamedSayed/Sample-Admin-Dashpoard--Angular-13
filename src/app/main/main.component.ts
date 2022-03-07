import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { Speakers } from '../_models/speakers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {
  @Input() txtSearch: string = "";



  constructor() {
  }
  ngOnChanges() {
  }
  ngOnInit(): void {
  }

}
