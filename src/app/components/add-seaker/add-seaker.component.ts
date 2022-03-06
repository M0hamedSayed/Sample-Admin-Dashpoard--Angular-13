import { Component, OnInit, Input } from '@angular/core';
import { Speakers } from './../../_models/speakers';

@Component({
  selector: 'app-add-seaker',
  templateUrl: './add-seaker.component.html',
  styleUrls: ['./add-seaker.component.css']
})
export class AddSeakerComponent implements OnInit {
  imgPath: any = "";
  @Input() speakers: Speakers[] = [];
  speaker: Speakers = new Speakers(0, "", "", "", { city: "", building: 0, street: 0 }, "", 30, false, "EGYPT", "", false, "Speaker", 5);

  saveSpeaker() {
    this.speaker.image = this.imgPath;
    this.speaker.id = this.speakers.length + 1;
    this.speakers.push(Object.assign({}, this.speaker));
    this.speaker = new Speakers(0, "", "", "", { city: "", building: 0, street: 0 }, "", 0, false, "EGYPT", "", false, "Speaker", 5);
    this.imgPath = "";
  }


  uploadImg(e: any) {
    const fileInput = e.target.nextElementSibling;
    let uploaded_image;
    fileInput.addEventListener('change', () => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        uploaded_image = reader.result;
        this.imgPath = uploaded_image
      });
      reader.readAsDataURL(fileInput.files[0]);
    })
    fileInput.click();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
