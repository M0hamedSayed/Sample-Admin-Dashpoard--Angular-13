import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Input() speakers: Speakers[] = [];
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;
  searchStr: string = "";
  getItem() {
    this.textChange.emit(this.searchStr);
  }

  constructor() {
  }
  ngOnInit(): void {
  }

}
