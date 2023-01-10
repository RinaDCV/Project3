import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';


import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
// Get the current date and time as a date-time value.
dateTime:Date= new Date;



constructor(private formBuilderForRegistration: FormBuilder,
            private userService: UserService,
            private router: Router) {}

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

formTest: any = {
firstName: 'firstName',
lastName: 'lastName',
email: 'email',
password: 'password',
confirmPassword: 'confirmPassword'
}


onSubmit(): void {

this.userService.registerUser(new User(this.firstName?.value!,
                               this.lastName?.value!,
                               this.email?.value!,
                               this.password?.value!));
// using our imported router, we navigate to the component at the specified path
this.router.navigate(['../login']);
}

// a boolean to keep track of whether the passwords match
passwordsMatch: boolean = false;

// a function to check if the passwords match
checkPasswords(): void {
// if the passwords match, passwordsMatch becomes true
// otherwise, it becomes false
this.passwordsMatch =
(this.password!.value === this.confirmPassword!.value);
}


  // create a date object
  ngOnInit(): void{
    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date()
    })

  }


}

