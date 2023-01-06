import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-masterheader',
  templateUrl: './masterheader.component.html',
  styleUrls: ['./masterheader.component.css']
})
export class MasterheaderComponent {

  userName: string = '';


  // access the user-service via the constructor
  constructor(private userService: UserService) {
    //its going to change everytime we change it
    userService.user.subscribe(data => {
      console.log(data);
      this.userName = data.firstName;
    })

  }

}
