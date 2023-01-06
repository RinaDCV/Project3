import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
// Get the current date and time as a date-time value.
dateTime:Date= new Date;


constructor(private formBuilderForRegistration: FormBuilder, private userService:UserService){}

registrationForm = this.formBuilderForRegistration.group(
  {
    firstName: ['', Validators.compose([Validators.minLength(3),
                                        Validators.maxLength(20),
                                        Validators.required])],
    lastName: ['', Validators.compose([Validators.minLength(3),
                                       Validators.maxLength(20),
                                       Validators.required])],
    email: ['', Validators.compose([Validators.required,
                                    Validators.email])],
    password: ['', Validators.compose([Validators.required,
                                       Validators.minLength(8),
                                       Validators.maxLength(8)])],
    confirmPassword: ['', Validators.compose([Validators.required,
                                              Validators.minLength(8),
                                              Validators.maxLength(8)])]
  }
);
get firstName() {
  return this.registrationForm.get('firstName');
}

get lastName() {
  return this.registrationForm.get('lastName');
}

get email() {
  return this.registrationForm.get('email');
}

get password() {
  return this.registrationForm.get('password');
}

get confirmPassword() {
  return this.registrationForm.get('confirmPassword');
}

//class variable to hold form objects
formTest: any = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword'
}

 onSubmit(): void {
    this.formTest = this.registrationForm.value;
    this.userService.updateUser(this.registrationForm.value);

  }

  passwordsMatch: boolean = false;

  checkPasswords(): void {
    //checking to see if passwords match
    this.passwordsMatch =
      (this.password!.value === this.confirmPassword!.value);
      this.userService.updateUser(this.registrationForm.value);

  }

  // create a date object
  ngOnInit(): void{
    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date()
    })

  }


}
