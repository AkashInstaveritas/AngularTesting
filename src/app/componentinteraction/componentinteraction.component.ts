import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componentinteraction',
  templateUrl: './componentinteraction.component.html',
  styleUrls: ['./componentinteraction.component.css']
})
export class ComponentinteractionComponent implements OnInit {

  @Input('parentData') public name: string;

  @Input('age') public age: number = 18;

  @Output() public childEvent = new EventEmitter<any>();

  @Output() public userExited = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  fireEvent() {

    this.userExited.emit('himanshu');

    this.childEvent.emit('Child to parent interaction works!');
  }

}
