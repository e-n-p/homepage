import { Component, OnInit } from '@angular/core'
import { LampiService } from '../lampi.service'
import { Track } from '../types';


@Component({
  selector: 'app-lampi',
  templateUrl: './lampi.component.html',
  styleUrls: ['./lampi.component.css']
})
export class LampiComponent implements OnInit {

  isShow = true
  tracks: Track[] = []
  tableHeaders = ["Intensity", "Pattern", "Colour"]
  activeRow = '0';
  lampiState: Array<string> = []

  constructor( 
    private lampService: LampiService, 
  ) { }

  ngOnInit(): void {
    this.lampService.getTracks().subscribe(tracks => this.tracks = tracks)
  }

  onButtonClicked(): void {
    console.log('onButtonClicked clicked!')
    this.lampService.getOn().subscribe()
    this.activeRow = '1';
  }

  offButtonClicked(): void {
    console.log('offButtonClicked clicked!')
    this.lampService.getOff().subscribe()
    this.activeRow = '0';
  }

  async presetsButtonClicked() {
    console.log('presetsButtonClicked clicked!')
    this.isShow = !this.isShow
    if (!this.isShow) {
      this.lampiState = await this.lampService.getStatusWithArgs().toPromise()
      this.activeRow = this.matchTrack()
    }

  }

  presetTracksClicked(track: Track): void {
    console.log('presetTracksClicked!')
    console.log(track)
    this.activeRow = track.id
    this.lampService.getOnWithParams(track).subscribe()
  }


  matchTrack(): string {
    if (this.lampiState.length != 0) {
      for (var i=0; i<this.tracks.length; i++){
        if (
          this.tracks[i].pattern == this.lampiState[0] &&
          this.tracks[i].intensity == this.lampiState[1] &&
          this.tracks[i].colour == this.lampiState[2]
        ){
          return this.tracks[i].id
        }
      }
    }
    return '0'
  }

}