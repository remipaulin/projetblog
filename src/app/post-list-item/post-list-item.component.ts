import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postListItem: Post;
  @Input() index: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLike(){
    this.postsService.addLoveIts(this.index);
    // this.postListItem.loveIts ++;
    console.log("J'aime");
  }

  onNotLike(){
    this.postsService.removeLoveIts(this.index);
    console.log("J'aime pas");
  }

  onDeletePost(){
    this.postsService.removePost(this.index);

  }

}
