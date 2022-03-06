import { Injectable } from '@angular/core';
import { Speakers } from '../_models/speakers';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private speakers: Speakers[] = [
    new Speakers(1, "Mohamed", "Sayed", "./../../assets/images/Logo_mockup1.jpg", { building: 10, street: 10, city: "fayum" }, "29-9-1991", 40, false, "EGYPT", "ms@gmail.com", true, "Admin", 5),
    new Speakers(2, "Ali", "Sayed", "", { building: 10, street: 10, city: "fayum" }, "29-9-1991", 40, false, "EGYPT", "ms@gmail.com", false, "Speaker", 3.5),
    new Speakers(3, "Omar", "Sayed", "", { building: 10, street: 10, city: "fayum" }, "29-9-1991", 40, false, "EGYPT", "ms@gmail.com", false, "Speaker", 2.3)
  ];

  getSpeakers() {
    return this.speakers;
  }//get all speakers

  addSpeaker(speaker: Speakers) {
    this.speakers.push(Object.assign({}, speaker));
  }//add new speaker

  getSpeakerWithId(id: number) {
    const speaker = this.speakers.find((speaker) => speaker.id == id);
    if (!speaker) return null;
    else return speaker;
  }//get one speaker with id

  speakerEdit(id: number, speakerModified: object) {
    const speakerWithId = this.getSpeakerWithId(id);
    if (speakerWithId)
      Object.assign(speakerWithId, speakerModified);
  }//edit speaker

  speakerDelete(index: number) {
    this.speakers.splice(index, 1);
  }

  constructor() { }
}
