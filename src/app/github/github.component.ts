import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  followers: any[];

  constructor(private service: GithubService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        response => this.followers = response);
  }
}
