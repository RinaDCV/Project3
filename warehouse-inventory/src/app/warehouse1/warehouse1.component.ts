import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttphandlerService } from '../services/httphandler.service';
import { Inventory } from '../model/inventory.model';
import { Aircraft } from '../model/aircraft.model';


@Component({
  selector: 'app-warehouse1',
  templateUrl: './warehouse1.component.html',
  styleUrls: ['./warehouse1.component.css']
})
export class Warehouse1Component implements OnInit{
  checked: any;
  tabledata: any =[];


  constructor(private userService: UserService, private router: Router, private HttpHandlerService: HttphandlerService) {


  // //subscription to the return of the method
  //  this.HttpHandlerService.getAll().subscribe(data => {
  // //   //console.log(data.body.drinks)  <=  used for troubleshooting the response..change variables
  //  this.tabledata= data;

  //  });

  //  this.HttpHandlerService.updateTD(this.tabledata).subscribe(data => {
  //   //   //console.log(data.body.drinks)  <=  used for troubleshooting the response..change variables
  //   this.tabledata= data;

  //    });

  //  this.HttpHandlerService.removeTD().subscribe(data => {
  //   //   //console.log(data.body.drinks)  <=  used for troubleshooting the response..change variables
  //   this.tabledata= data;

  //    });

  //  this.HttpHandlerService.postTD(this.tabledata).subscribe(data => {
  //   //   //console.log(data.body.drinks)  <=  used for troubleshooting the response..change variables
  //   this.tabledata= data;

  //   });
  //    this.HttpHandlerService.patchTD(this.tabledata).subscribe(data => {
  //     //   //console.log(data.body.drinks)  <=  used for troubleshooting the response..change variables
  //     this.tabledata= data;

  //   });
  //      this.HttpHandlerService.getById(this.tabledata).subscribe(data => {
  //       this.tabledata.push(data);

  //   });

  }

  ngOnInit(): void {
      this.HttpHandlerService.inventoryDb.subscribe(data => this.inventory = data)
      this.get();
      console.log(this.inventory);
    }


    title = 'warehouse-inventory';
    email: string = '';
    password: string = '';

    isMenuVisible = false;

    inventory_id:number = 0;
    warehouse_id: string = "";
    part_id:number = 0;
    nomenclature:string = '';
    price:string = '';
    qty:number = 0;
    aircraft_id:number= 0;
    product_id:number= 0;
    manufacturer_name:string='';

    toBeDeleted:number= 0;

    inventory:Inventory[]= [];



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

  addInventory(){
    let addItem= {id: this.inventory_id,
      warehouse_id:this.warehouse_id,
      part_id:this.part_id,
      nomenclature:this.nomenclature,
      manufacturer_name: this.manufacturer_name,
      price:this.price,
      qty:this.qty,
      aircraft_id:this.aircraft_id,
      product_id:this.product_id}
    this.HttpHandlerService.postTD(addItem);
    console.log(addItem);
  }
  saveInventory(){
   // this.HttpHandlerService.patchTD();
  }

  deleteBy(){
    this.HttpHandlerService.removeTD(this.toBeDeleted);
  }
  get(){

    this.HttpHandlerService.getAll();
  }
  removeById(id:number){
    this.toBeDeleted= id;
  }

}

