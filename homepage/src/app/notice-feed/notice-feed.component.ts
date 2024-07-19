import { Component, OnInit } from '@angular/core';
import { NoticeFeedService } from './notice-feed.service'

@Component({
  selector: 'app-notice-feed',
  templateUrl: './notice-feed.component.html',
  styleUrls: ['./notice-feed.component.css']
})
export class NoticeFeedComponent implements OnInit {

  data: any;

  constructor(
    private service: NoticeFeedService
  ) { }

  ngOnInit(): void {
    this.service.getLatest().subscribe(
      data => this.data = data
    )
  }

}
