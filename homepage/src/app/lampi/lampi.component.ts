import { Component, OnInit } from '@angular/core'
import { LampiService } from '../lampi.service'
import { Track } from '../types';


@Component({
  selector: 'app-lampi',
  templateUrl: './lampi.component.html',
  styleUrls: ['./lampi.component.css']
})
export class LampiComponent implements OnInit {

  result = ""
  isShow = true
  tracks: Track[] = []
  tableHeaders = ["Intensity", "Pattern", "Colour"]

  constructor( 
    private lampService: LampiService, 
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
    this.lampService.getTracks().subscribe(tracks => this.tracks = tracks)
    this.isShow = !this.isShow
    console.log(this.tracks)
  }

  presetTracksClicked(track: Track): void {
    console.log('presetTracks!')
    console.log(track)
    this.lampService.getOnWithParams(track).subscribe()
  }

}
