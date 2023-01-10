import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { UserService } from './services/user.service';
import { ManagerService } from './services/manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'warehouse-inventory';
  dateTime:Date= new Date;

  defaultUser: boolean = true;

  constructor(private userService: UserService, private managerService: ManagerService) {
    this.userService.user.subscribe(data => {
      if (data.firstName === 'Default')
        this.defaultUser = true;
      else
        this.defaultUser = false;
    });
    this.managerService.user.subscribe(data => {
      if (data.firstName === 'Default')
        this.defaultUser = true;
      else
        this.defaultUser = false;
    });
  };
  // create a date object
  ngOnInit(): void{
    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date()
    })

  }


}
