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
  // @Input() speakers: Speakers[] = [];
  // @Output() speakerEdited: EventEmitter<any> = new EventEmitter<any>();
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

    // this.speakers = this.speakersService.getSpeakers();
    // this.speakers.splice(i, 1);
    // console.log(this.speakers);
    // this.speakerEdited.emit(this.speakers);
  }

  editClick(i: number) {
    this.edit = true;
    this.enableEditIndex = i;
  }

  speakerEdit(id: number, { ...speaker }): void {

    // const speakerWithId: any = this.speakers.find((s) => {
    //   return s.id == id
    // });
    // Object.assign(speakerWithId, speaker);
    this.speakersService.speakerEdit(id, speaker);
    this.edit = false;
    // this.speakerEdited.emit(this.speakers);

  }

  ngOnChanges() {
    this.speakers = this.speakersService.getSpeakers();
  }//get all speakers after loaded

  constructor(public speakersService: SpeakerService) {
  }
  ngOnInit(): void {
  }

}
