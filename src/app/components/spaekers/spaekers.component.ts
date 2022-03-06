import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter, OnChanges } from '@angular/core';
import { Speakers } from './../../_models/speakers';
@Component({
  selector: 'app-spaekers',
  templateUrl: './spaekers.component.html',
  styleUrls: ['./spaekers.component.css']
})
export class SpaekersComponent implements OnInit, OnChanges {
  @Input() txtSearch: string = "";
  @Input() speakers: Speakers[] = [];
  @Output() speakerEdited: EventEmitter<any> = new EventEmitter<any>();
  searchStr: string = "";
  getItem() {
    console.log(this.speakers);
    console.log(this.searchStr);
  }

  edit: boolean = false;
  enableEditIndex: any = null;
  delete(i: any) {
    console.log(i);
    this.speakers.splice(i, 1);
    console.log(this.speakers);
    this.speakerEdited.emit(this.speakers);
  }
  editClick(i: number) {
    this.edit = true;
    this.enableEditIndex = i;
  }
  speakerEdit(n: any, id: number, i: number, { ...speaker }): void {
    console.log(n.parentElement.parentElement, id, i);

    console.log(speaker);
    const speakerWithId: any = this.speakers.find((s) => {
      return s.id == id
    });
    Object.assign(speakerWithId, speaker);
    // console.log(speakerWithId);

    this.edit = false;
    console.log(this.speakers);
    this.speakerEdited.emit(this.speakers);

  }

  ngOnChanges() {
  }
  constructor() {
  }
  ngOnInit(): void {
  }

}
