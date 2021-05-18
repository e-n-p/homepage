import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LampiService } from '../lampi.service';

@Component({
  selector: 'app-lampi',
  templateUrl: './lampi.component.html',
  styleUrls: ['./lampi.component.css']
})
export class LampiComponent implements OnInit {

  constructor( private service: LampiService, ) { }

  ngOnInit(): void {
  }

  onButtonClicked(): void {
    console.log('onButtonClicked clicked!')
    this.service.getOn().subscribe();
  }

  offButtonClicked(): void {
    console.log('offButtonClicked clicked!')
    this.service.getOff().subscribe();
  }

  presetsButtonClicked(): void {
    console.log('presetsButtonClicked clicked!')
    this.service.getPresets().subscribe();
  }

  onSolidButtonClicked(): void {
    console.log('onSolidButtonClicked clicked!')
    this.service.postOnSolid().subscribe();
  }

}
