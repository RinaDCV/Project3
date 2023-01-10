import { Component } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-masterheader',
  templateUrl: './masterheader.component.html',
  styleUrls: ['./masterheader.component.css']
})
export class MasterheaderComponent {

  userFirstName: string = '';

// access the service via the constructor
constructor(private userService: UserService) {

  // this returns the new data whenever the thing we're subscribing
  // to changes state
  userService.user.subscribe(data => {
    console.log(data);
    this.userFirstName = data.firstName;
  })

}

}
