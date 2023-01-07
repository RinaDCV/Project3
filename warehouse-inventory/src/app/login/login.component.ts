import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) {}
  email: string = '';
  password: string = '';


// function to log the user in if they're in the array of users
login(): void {
  const users = this.userService.users;

  for (let user of users) {
    if (user.email === this.email && user.password === this.password)
      this.userService.loginUser(user);
  }

  this.router.navigate(['./login']);
}
devLogin() {
  this.userService.loginUser(this.userService.users[0]);
  this.router.navigate(['../warehouse1']);
}


}





































//   // function to log the user in if they're in the array of users
//   login(): void {
//     const users = this.userService.users;

//     for (let user of users) {
//       //this first if statement is if a user passes email and password challenge.
//       if (user.email === this.email && user.password === this.password)
//         this.userService.loginUser(user);
//         //if statement here to determine wether Manager or Associate
//         this.router.navigate(['./login']);//logic to figure out where the auth user goes
//     }else
//     //this second statement is if the challenge does not pass.
//     if (user.email !=== this.email || user.password !=== this.password)
//     console.log("Access Denied")
//     //something to validate and reject login
//   }

//   devLogin() {
//     this.userService.loginUser(this.userService.users[0]);
//     this.router.navigate(['']);
//   }

// }
