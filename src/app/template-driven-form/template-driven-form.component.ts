import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('Rob', 'rob@gmail.com', 981028349, '', 'morning', true);

  topicHasError = true;
  submitted = false;

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

  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => console.log('success!', data),
      error => console.log('Error!', error)
    );
  }

}
