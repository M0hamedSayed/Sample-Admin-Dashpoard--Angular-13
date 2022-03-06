import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  cropWidth: number = 80;
  @Input() rating: number = 5;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * 80 / 5;
  }
  ngOnInit(): void {
  }

}
