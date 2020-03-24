import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componentinteraction',
  templateUrl: './componentinteraction.component.html',
  styleUrls: ['./componentinteraction.component.css']
})
export class ComponentinteractionComponent implements OnInit {

  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit('CHild to parent interaction works!');
  }

}
