import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter, OnChanges } from '@angular/core';
import { SpeakerService } from 'src/app/services/speaker.service';
import { Speakers } from './../../_models/speakers';
@Component({
  selector: 'app-spaekers',
  templateUrl: './spaekers.component.html',
  styleUrls: ['./spaekers.component.css']
})
export class SpaekersComponent implements OnInit, OnChanges {
  @Input() txtSearch: string = "";
  readonly!: boolean;
  speakers!: Speakers[];
  searchStr: string = "";
  getItem() {
    console.log(this.speakers);
    console.log(this.searchStr);
  }

  edit: boolean = false;
  enableEditIndex: any = null;
  delete(index: number) {
    this.speakersService.speakerDelete(index);
  }

  editClick(i: number) {
    this.edit = true;
    this.enableEditIndex = i;
  }

  speakerEdit(id: number, { ...speaker }): void {
    this.speakersService.speakerEdit(id, speaker);
    this.edit = false;
  }

  ngOnChanges() {
    this.speakers = this.speakersService.getSpeakers();
  }//get all speakers after loaded

  constructor(public speakersService: SpeakerService) {
  }
  ngOnInit(): void {
  }

}
