import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
// Get the current date and time as a date-time value.
dateTime:Date= new Date;

  // create a date object
  ngOnInit(): void{
    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date()
    })
 
  }


}
