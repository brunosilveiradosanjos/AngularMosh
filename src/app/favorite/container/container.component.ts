import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() postObject: any;
  favorite: string;

  constructor() { }

  ngOnInit() {
    console.log(this.postObject.isFavorite)
    console.log(this.postObject.title)
    this.checkFavorite();
  }


  ChangeFavorite() {
    this.postObject.isFavorite = !this.postObject.isFavorite;
    this.checkFavorite();
  }

  checkFavorite() {
    this.favorite = this.postObject.isFavorite == false ? "Favorite" : "Unfavorite";
  }

}
