import { Http } from '@angular/http';
import { DataService } from './../services/data.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GithubService extends DataService {

    constructor(http: Http) {
        super("https://api.github.com/users/mosh-hamedani/followers", http);
    }
}