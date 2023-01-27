import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private managerService: ManagerService, private router: Router) {}
  email: string = '';
  password: string = '';


// function to log the user in if they're in the array of users
managerLogin(): void {
  const users = this.userService.users;
  const managers = this.managerService.users;
  for (let manager of managers) {
    //this first if statement is if a user passes email and password challenge.
    if (manager.email === this.email && manager.password === this.password)
      this.managerService.loginManager(manager);
      this.router.navigate(['../warehouse1']);

      if(manager.email !== this.email || manager.password !== this.password)
      this.router.navigate(['../register']);
  }

  // associateMatch: boolean = false;

  // // a function to check if the passwords match
  // checkEmail(): void {
  //   // if the passwords match, passwordsMatch becomes true
  //   // otherwise, it becomes false
  //  if ( this.AssociateMatch = this.email.valueOf);
  }
  login(): void {
    const users = this.userService.users;

    for (let user of users) {
      //this first if statement is if a user passes email and password challenge.
      if (user.email === this.email && user.password === this.password)
        this.userService.loginUser(user);
        this.router.navigate(['../associate']);

        if (user.email !== this.email || user.password !== this.password)
        this.router.navigate(['../register']);
    }


}
devLogin() {
  this.userService.loginUser(this.userService.users[0]);
  this.router.navigate(['../warehouse1']);
}

}

function checkEmail() {
  throw new Error('Function not implemented.');
}
  // // function to log the user in if they're in the array of users
  // login(): void {
  //   const users = this.userService.users;

  //   for (let user of users) {
  //     //this first if statement is if a user passes email and password challenge.
  //     if (user.email === this.email && user.password === this.password)
  //       this.userService.loginUser(user);
  //       //if statement here to determine wether Manager or Associate
  //       this.router.navigate(['./login']);//logic to figure out where the auth user goes
  //   }else
  //   //this second statement is if the challenge does not pass.
  //   if (user.email !=== this.email || user.password !=== this.password)
  //   console.log("Access Denied")
  //   //something to validate and reject login
  // }



