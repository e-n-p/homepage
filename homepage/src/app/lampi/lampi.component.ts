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
  
  onSwitchClicked(): void {
    console.log('onSwitchClicked clicked!')
    this.service.getSwitch().subscribe();
  }


}
