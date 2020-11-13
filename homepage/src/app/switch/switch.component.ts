import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  constructor( private service: SwitchService, ) { }

  ngOnInit(): void {
  }
  
  onSwitchClicked(): void {
    console.log('onSwitchClicked clicked!')
    this.service.getSwitch().subscribe();
  }


}
