import { Component, OnInit } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { LampiService } from '../lampi.service'
import { TracksService } from '../tracks.service'
import { Tracks } from '../types';


@Component({
  selector: 'app-lampi',
  templateUrl: './lampi.component.html',
  styleUrls: ['./lampi.component.css']
})
export class LampiComponent implements OnInit {

  result = ""
  isShow = true
  tracks: Tracks[] = []
  tableHeaders = ["Id", "Intensity", "Pattern", "Colour"]

  constructor( 
    private lampService: LampiService, 
    private tracksService: TracksService,
  ) { }

  ngOnInit(): void {
  }

  onButtonClicked(): void {
    console.log('onButtonClicked clicked!')
    this.lampService.getOn().subscribe()
  }

  offButtonClicked(): void {
    console.log('offButtonClicked clicked!')
    this.lampService.getOff().subscribe()
  }

  presetsButtonClicked(): void {
    console.log('presetsButtonClicked clicked!')
    this.tracksService.getTracks().subscribe(tracks => this.tracks = tracks)
    this.isShow = !this.isShow
    console.log(this.tracks)
  }

  onSolidButtonClicked(): void {
    console.log('onSolidButtonClicked clicked!')
    this.lampService.postOnSolid().subscribe()
    console.log("post on solid click")
  }
  
  onPulseButtonClicked(): void {
    console.log('onPulseButtonClicked clicked!')
    this.lampService.postOnPulse().subscribe(response => this.result = response)
    console.log(this.result)
  }

  onBannerButtonClicked(): void {
    console.log('onBannerButtonClicked clicked!')
    this.lampService.postOnBanner().subscribe(response => this.result = response)
    console.log(this.result)
  }


}
