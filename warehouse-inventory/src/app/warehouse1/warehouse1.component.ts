import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttphandlerService } from '../services/httphandler.service';
import { Aircraft } from '../model/aircraft.model';


@Component({
  selector: 'app-warehouse1',
  templateUrl: './warehouse1.component.html',
  styleUrls: ['./warehouse1.component.css']
})
export class Warehouse1Component {
  checked: any;
  tabledata: any =[];


  constructor(private userService: UserService, private router: Router, private HttpHandlerService: HttphandlerService) {

  //subscription to the return of the method
   this.HttpHandlerService.getAll().subscribe(data => {
  //   //console.log(data.body.drinks)  <=  used for troubleshooting the response..change variables
   this.tabledata= data;

   });

   this.HttpHandlerService.updateTD(this.tabledata).subscribe(data => {
    //   //console.log(data.body.drinks)  <=  used for troubleshooting the response..change variables

    this.tabledata= data;

     });

  }


    title = 'warehouse-inventory';
    email: string = '';
    password: string = '';

    isMenuVisible = false;

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

  toggleMenu(){
    this.isMenuVisible =!this.isMenuVisible;
  }

}
