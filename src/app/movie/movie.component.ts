import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Actor } from '../models/actor.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Input() actor: Actor;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Movie - ', this.title, this.actor);
  }

}
