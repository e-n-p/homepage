import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: any;

  constructor(
    private service: NotesService,
  ) { }

  ngOnInit() {
    this.service.getNotes().subscribe(
      data => this.notes = data
    );
  }

  onWriteClicked(f: NgForm): void {
    const text = f.form.value.note
    console.log("We're writing this " + text)
    this.service.updateNotes(text).subscribe();
  }

}
