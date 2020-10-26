import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class LikeContainerComponent implements OnInit {

  @Input() likes: any;

  constructor() { }

  ngOnInit() {
    // console.log(this.likes);
  }
  likeButton() {
    this.likes.liked = !this.likes.liked;
    this.likes.liked ? this.likes.likeCounter++ : this.likes.likeCounter--;
    console.log(this.likes);
  }
}
