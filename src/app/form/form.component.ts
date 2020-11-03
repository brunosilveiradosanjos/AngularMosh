import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  categories = [
    { id: 1, name: "Delevopment" },
    { id: 2, name: "Art" },
    { id: 3, name: "Languages" }
  ]

  submit(course) {
    console.log(course);
  }

}
