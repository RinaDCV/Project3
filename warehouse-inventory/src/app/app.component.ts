import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'warehouse-inventory';

  defaultUser: boolean = true;

  constructor(private userService: UserService) {
    this.userService.user.subscribe(data => {
      if (data.firstName === 'Default')
        this.defaultUser = true;
      else
        this.defaultUser = false;
    });
  };
}
