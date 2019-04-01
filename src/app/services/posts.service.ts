import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsSubject = new Subject<Post[]>();

  creation_date = new Date();
  lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: this.lorem_ipsum,
      loveIts: 1,
      created_at: this.creation_date
    },
    {
      title: 'Mon deuxième post',
      content: this.lorem_ipsum,
      loveIts: 0,
      created_at: this.creation_date
    },
    {
      title: 'Troisième post',
      content: this.lorem_ipsum,
      loveIts: -1,
      created_at: this.creation_date
    },

  ];
  
  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {

  }

  getPosts() {

  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts;

  }

  removePost(index: number) {
    console.log("Suppression du post "+ index);
    this.posts.splice(index,1);
    this.emitPosts;

  }

  addLoveIts(index: number) {
    this.posts[index]['loveIts'] ++;
    this.emitPosts;

  }

  removeLoveIts(index: number) {
    this.posts[index]['loveIts'] --;
    this.emitPosts;

  }

}
