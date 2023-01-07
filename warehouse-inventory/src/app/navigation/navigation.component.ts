import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  userFirstName: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {
    this.userService.user.subscribe(data => {
      this.userFirstName = data.firstName;
    });
  }
  login(): void {
    const users = this.userService.users;

    for (let user of users) {
      if (user.email === this.email && user.password === this.password)
        this.userService.loginUser(user);
    }

    this.router.navigate(['../warehouse1']);
  }
  // to log out
  logout(): void {
    this.userService.logoutUser();
    this.router.navigate(['../login']);
  }

}
