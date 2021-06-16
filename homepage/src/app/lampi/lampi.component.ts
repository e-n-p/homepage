import { Component, OnInit } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { LampiService } from '../lampi.service'

@Component({
  selector: 'app-lampi',
  templateUrl: './lampi.component.html',
  styleUrls: ['./lampi.component.css']
})
export class LampiComponent implements OnInit {

  result = ""
  presets = ""

  constructor( 
    private service: LampiService, 
  ) { }

  ngOnInit(): void {
  }

  onButtonClicked(): void {
    console.log('onButtonClicked clicked!')
    this.service.getOn().subscribe()
  }

  offButtonClicked(): void {
    console.log('offButtonClicked clicked!')
    this.service.getOff().subscribe()
  }

  presetsButtonClicked(): void {
    console.log('presetsButtonClicked clicked!')
    this.service.getPresets().subscribe(response => this.presets = response)
    console.log(this.presets)
  }

  onSolidButtonClicked(): void {
    console.log('onSolidButtonClicked clicked!')
    this.service.postOnSolid().subscribe()
    console.log("post on solid click")
  }
  
  onPulseButtonClicked(): void {
    console.log('onPulseButtonClicked clicked!')
    this.service.postOnPulse().subscribe(response => this.result = response)
    console.log(this.result)
  }

  onBannerButtonClicked(): void {
    console.log('onBannerButtonClicked clicked!')
    this.service.postOnBanner().subscribe(response => this.result = response)
    console.log(this.result)
  }


}
