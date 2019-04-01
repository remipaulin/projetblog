import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postListItem: Post;

  constructor() { }

  ngOnInit() {
  }

  onLike(){
    this.postListItem.loveIts ++;
    console.log("J'aime");
  }

  onNotLike(){
    this.postListItem.loveIts --;
    console.log("J'aime pas");
  }

}
