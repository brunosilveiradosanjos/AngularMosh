import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent implements OnInit {

  likes = {
    liked: false,
    likeCounter: 0
  }

  constructor() { }

  ngOnInit() {
  }



}
