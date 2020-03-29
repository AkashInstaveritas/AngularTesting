import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // registrationForm = new FormGroup({
  //   userName: new FormControl('Akash'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl('')
  // });

  constructor(private fb: FormBuilder) { }

  //Creating a getter for a formcontrol
  get username()
  {
    return this.registrationForm.get('userName');
  }

  get email()
  {
    return this.registrationForm.get('email');
  }

  registrationForm: FormGroup;

  //Apply Conditional Validation
  ngOnInit(): void
  {
    //FormGroup using formbuilder
    this.registrationForm = this.fb.group({
      userName: ['Akash', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: ['']
    }, {validator: PasswordValidator});

    this.registrationForm.get('subscribe').valueChanges
        .subscribe(checkedValue => {
          const email = this.registrationForm.get('email');
          if(checkedValue)
          {
            email.setValidators(Validators.required);
          }
          else
          {
            email.clearValidators();
          }
          email.updateValueAndValidity();
        });
  }

  loadApiData()
  {
    this.registrationForm.setValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test'
    });
  }
}
