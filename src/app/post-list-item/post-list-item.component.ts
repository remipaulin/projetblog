import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postListItemTitle: string;
  @Input() postListItemContent: string;
  @Input() postListItemLoveIts: number;
  @Input() postListItemCreatedAt: Date;


  constructor() { }

  ngOnInit() {
  }

}
