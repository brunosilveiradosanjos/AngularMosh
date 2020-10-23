import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casting',
  templateUrl: './casting.component.html',
  styleUrls: ['./casting.component.css']
})
export class CastingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  text: string;

  log() {
    console.log(this.text);
  }

}
