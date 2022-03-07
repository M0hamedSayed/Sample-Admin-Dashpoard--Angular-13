import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { SpeakerService } from 'src/app/services/speaker.service';
import { Speakers } from './../../_models/speakers';

@Component({
  selector: 'app-add-seaker',
  templateUrl: './add-seaker.component.html',
  styleUrls: ['./add-seaker.component.css']
})
export class AddSeakerComponent implements OnInit, OnChanges {
  imgPath: any = "";
  @ViewChild("imgFile") imgFile!: ElementRef;
  // @Input() speakers: Speakers[] = [];
  speakers!: Speakers[];
  speaker: Speakers = new Speakers(0, "", "", "", { city: "", building: 0, street: 0 }, "", 30, false, "EGYPT", "", false, "Speaker", 5);

  saveSpeaker() {
    this.speakers = this.speakerService.getSpeakers();
    //load image if exists
    this.speaker.image = this.imgPath;
    //auto increment ID
    this.speaker.id = this.speakers.length + 1;
    this.speakerService.addSpeaker(this.speaker);
    // this.speakers.push(Object.assign({}, this.speaker));
    //reset all inputs
    this.speaker = new Speakers(0, "", "", "", { city: "", building: 0, street: 0 }, "", 0, false, "EGYPT", "", false, "Speaker", 5);
    this.imgPath = "";
  }

  loadImg() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      let uploaded_image = reader.result;
      this.imgPath = uploaded_image
    });
    reader.readAsDataURL(this.imgFile.nativeElement.files[0]);
  }

  constructor(public speakerService: SpeakerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.speakers = this.speakerService.getSpeakers();
  }
  ngOnInit(): void {
  }

}
