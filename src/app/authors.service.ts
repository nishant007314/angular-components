import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors = ["William","Leo","Stephen"]

  getAuthors(){
    return this.authors;
  }
}
