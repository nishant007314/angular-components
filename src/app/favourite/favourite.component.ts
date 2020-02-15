import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;

  @Output() change = new EventEmitter();
  title: string;

  favClicked() {
    this.isFavorite = this.isFavorite ? false : true;
    this.change.emit({ eventObject: this.isFavorite });
  }

  ngOnInit() {
  }

}

export interface FavoriteChangedEventObject {
  newValue: boolean
}