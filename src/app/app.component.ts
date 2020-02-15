import { FavoriteChangedEventObject } from './favourite/favourite.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Your first angular app';
  courses = ["maths", "chemistry"];
  viewMode = 'other';

  post = {
    title: "Title",
    isFavorite: false
  }

  rankings = null;

  loadRankings() {
    this.rankings = [
      { rank: 1, player: "Rafael Nadal" },
      { rank: 2, player: "Novak Djokovic" },
      { rank: 3, player: "Roger Federer" }
    ];
  }

  trackRankings(index, ranking) {
    return ranking ? ranking.rank : undefined;
  }

  removePlayer(ranking) {
    let index = this.rankings.indexOf(ranking);
    this.rankings.splice(index, 1);
  }

  addPlayer() {
    let indexToPush = this.rankings.length + 1;
    this.rankings.push({ rank: indexToPush, player: "Stan Wawrinka" });
  }

  twitter = {
    isLiked: false,
    likeCount: 10,
    body: "Federer beat Millman and called it a tough one"
  }

  onFavoriteChange(eventObject: FavoriteChangedEventObject) {
    console.log("favorite changed to: ", eventObject);
  }

  canSave: boolean = false;

  toggleSave() {
    this.canSave = this.canSave ? false : true;
  }

  task = {
    title: "Null safe task",
    assignee: null
  }
}