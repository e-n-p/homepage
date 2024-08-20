import { Component, OnInit } from '@angular/core';
import { NoticeFeedService } from './notice-feed.service'
import { NoticeFeed } from '../shared/types/NoticeFeed.type';

@Component({
  selector: 'app-notice-feed',
  templateUrl: './notice-feed.component.html',
  styleUrls: ['./notice-feed.component.css']
})
export class NoticeFeedComponent implements OnInit {

  data: NoticeFeed[];

  constructor(
    private service: NoticeFeedService
  ) { }

  ngOnInit(): void {
    this.service.getLatest().subscribe(
      data => this.data = data
    )
  }

}
