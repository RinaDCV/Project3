import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Manager } from '../model/manager';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor() { }
  users: Manager[] = [
    new Manager('Manager', 'View', 'MG@gmail.com', '87654321')
  ]
  private currentUser = new BehaviorSubject<Manager>(new Manager('','','',''));

  user = this.currentUser.asObservable();

  loginManager(newUser: Manager): void {
      this.currentUser.next(newUser);
  }



}
