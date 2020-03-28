import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('Rob', 'rob@gmail.com', 981028349, '', 'morning', true);

  topicHasError = true;

  validateTopic(value)
  {
    if(value === "default")
    {
      this.topicHasError = true;
    }
    else
    {
      this.topicHasError = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
