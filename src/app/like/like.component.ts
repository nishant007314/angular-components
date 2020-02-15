import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input("likesCount") likesCount: number;
  @Input("isLiked") isLiked: boolean;

  likeClicked() {
    this.isLiked = this.isLiked ? false : true;
    this.likesCount += this.isLiked ? 1 : -1;
    console.log("is liked ?" + this.isLiked);
  }
}
