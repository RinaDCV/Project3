import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() { }

  // an array of pre-existing users we can add to as people register
  users: User[] = [
    new User('Associate', 'View', 'AS@gmail.com', '12345678'),
    new User('Manager', 'View', 'MG@gmail.com', '87654321'),

  ]

  // a BehaviorSubject is something whose state change is tracked
  // as if shifts from one thing to another
  private currentUser = new BehaviorSubject<User>(new User('','','',''));

  // this sets up the user variable to refer to the contents
  // of the userSubject variable as something whose changes
  // we can watch and respond to
  user = this.currentUser.asObservable();

  // this accomplishes the same goal
  // getUserSubject(): any {
  //   return this.currentUser.asObservable();
  // }

  // to update the data inside the BehaviorSubject
  loginUser(newUser: User): void {
    // this takes the input object
    // and stores it as the next state of the subject
    this.currentUser.next(newUser);
  }

  logoutUser(): void {
    this.currentUser.next(new User('','','',''));
  }

  // to add a user to our array for future login
  // using our new class as a parameter type
  registerUser(newUser: User) {
    this.users.push(newUser);
  }







}


