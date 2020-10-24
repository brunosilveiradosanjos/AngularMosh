import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  post = {
    title: "post",
    message: "Post Message sample",
    isFavorite: false
  }

  twitter = {
    title: "twitter",
    message: "Twitter Message sample",
    isFavorite: true
  }

  image = {
    title: "image",
    message: "Image Message sample",
    isFavorite: false
  }
}
