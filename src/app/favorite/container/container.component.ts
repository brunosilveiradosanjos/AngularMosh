import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isSelected = false
  favorite = "Favorite";

  ChangeFavorite() {
    this.isSelected = !this.isSelected;
    if (this.isSelected) {
      this.favorite = "Unfavorite";
    } else {
      this.favorite = "Favorite";
    }
  }

}
