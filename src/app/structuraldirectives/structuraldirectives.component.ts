import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent implements OnInit {

  displayName = false;

  public color = "blue";
  public colors = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit(): void {
  }

}
