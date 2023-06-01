import { Component, OnInit } from '@angular/core'
import { LampiService } from '../lampi.service'
import { Track } from '../types';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lampi',
  templateUrl: './lampi.component.html',
  styleUrls: ['./lampi.component.css']
})
export class LampiComponent implements OnInit {

  isShow = true
  tracks: Track[] = []
  tableHeaders = ["Intensity", "Pattern", "Colour"]
  activeRow = '0'
  lampiState: Array<string> = []

  customTrackForm = this.formBuilder.group({
    intensity: '',
    pattern: '',
    colour: '',
    colourTwo: ''
  });

  patterns: any[] = [
    { name: 'banner' },
    { name: 'pulse' },
    { name: 'solid' }
  ]

  constructor(
    private lampService: LampiService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.lampService.getTracks().subscribe(tracks => this.tracks = tracks)
  }

  async onButtonClicked() {
    console.log('onButtonClicked clicked!')
    let response = await this.lampService.getOn().toPromise()
    if (response == "0"){
      this.activeRow = '1'; //test
    } else if (response == "1") {
      alert("Lampi currently unreachable")
    }
  }

  async offButtonClicked() {
    console.log('offButtonClicked clicked!')
    let response = await this.lampService.getOff().toPromise()
    if (response == "0"){
      this.activeRow = '0';
    } else if (response == "1") {
      alert("Lampi currently unreachable")
    }
  }

  async presetsButtonClicked() {
    console.log('presetsButtonClicked clicked!')
    this.isShow = !this.isShow
    if (!this.isShow) {
      this.lampiState = await this.lampService.getStatusWithArgs().toPromise()
      this.activeRow = this.matchTrack()
    }
  }

  async presetTracksClicked(track: Track) {
    console.log('presetTracksClicked!')
    console.log(track)
    let response = await this.lampService.getOnWithParams(track).toPromise()
    if (response == "0"){
      this.activeRow = track.id
    } else if (response == "1") {
      alert("Lampi currently unreachable")
    }
  }

  async customTrackSelectionClicked() {
    console.log("customTrackSelectionClicked")

    const customTrack: Track = {
      id: "",
      intensity: this.customTrackForm.value.intensity,
      pattern : this.customTrackForm.value.pattern,
      colour: this.customTrackForm.value.colour + this.customTrackForm.value.colourTwo
    }
    console.log(customTrack)

    let response = await this.lampService.getOnWithParams(customTrack).toPromise()
    if (response == "1"){
      alert("Lampi currently unreachable")
    }
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