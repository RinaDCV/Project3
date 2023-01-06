import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userSubject= new BehaviorSubject<any> ({
    firstName: 'Default',
    lastName: 'User',
    email: '123@abc.com',
    password: '12345',
    confirmPassword: '12345'
  });

  user = this.userSubject.asObservable();

  getUserSubject(): any{
    return this.userSubject.asObservable();
  }
}


