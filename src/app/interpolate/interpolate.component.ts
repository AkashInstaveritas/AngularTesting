import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  public name = "Akash";

  //Property binding
  public myId = "testId";
  public isDisabled = true;

  //Class Binding
  public successClass="text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger"  : this.hasError,
    "text-special" : this.isSpecial
  }

  //Style Binding
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  //Event Binding
  public greeting = "";
  onClick(event) {
    this.greeting = event.type;
  }

  constructor() { }

  ngOnInit(): void {
  }

  greetUser()
  {
    return "Hello" + this.name;
  }

}
