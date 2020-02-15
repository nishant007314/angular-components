import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  title = "Authors";
  authors;
  isActive = true;
  email = "nishant@default.com";

  event = {
    title : "Comic con",
    venue : "San Diego",
    tickets : 120,
    pricePerTicket : 12550,
    rating : 4.7555,
    startsOn : new Date(2020,1,24),
    summary : "This is the day to meet your superhero and make your dream come true by being with them for whole day"
  };
  constructor(service : AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

  onSave($event){
    $event.stopPropagation();
    console.log($event);
    alert("saved");
  }

  onKeyUp(){
    console.log(this.email);
    alert(this.email);
  }

  onDiv(){
    console.log("div clicked")
  }

}
