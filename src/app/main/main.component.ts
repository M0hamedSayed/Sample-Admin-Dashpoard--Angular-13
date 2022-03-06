import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { Speakers } from '../_models/speakers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {
  @Input() txtSearch: string = "";
  speakers = [
    new Speakers(1, "Mohamed", "Sayed", "./../../assets/images/Logo_mockup1.jpg", { building: 10, street: 10, city: "fayum" }, "29-9-1991", 40, false, "EGYPT", "ms@gmail.com", true, "Admin", 5),
    new Speakers(2, "Ali", "Sayed", "", { building: 10, street: 10, city: "fayum" }, "29-9-1991", 40, false, "EGYPT", "ms@gmail.com", false, "Speaker", 3.5),
    new Speakers(3, "Omar", "Sayed", "", { building: 10, street: 10, city: "fayum" }, "29-9-1991", 40, false, "EGYPT", "ms@gmail.com", false, "Speaker", 2.3)
  ];

  saveSpeaker(data: any) {
    this.speakers = data;
    console.log(this.speakers);
  }

  constructor() {
  }
  ngOnChanges() {
  }
  ngOnInit(): void {
  }

}
