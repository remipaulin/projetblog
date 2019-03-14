import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetBlog';

  creation_date = new Date();
  lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

  posts = [
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
      title: 'Encore un post',
      content: this.lorem_ipsum,
      loveIts: -1,
      created_at: this.creation_date
    },

  ];
}
