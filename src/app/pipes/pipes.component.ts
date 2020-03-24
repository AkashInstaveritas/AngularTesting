import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "Instaveritas";
  public message = "Welcome to instaveritas!";
  public person = {
    "firstName" : "John",
    "lastName"  : "Doe"
  }
  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
