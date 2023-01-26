import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { environment} from 'src/environments/environment';
import { Aircraft } from '../model/aircraft.model';
import { Product } from '../model/product.model';
import { Inventory } from '../model/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class HttphandlerService {


  url: string = environment.apiURL;
  rawtabledata: any = {};
  tableitem = this.rawtabledata.asObserveable;

  inventory:Inventory[]=[];
  inventoryDb = new BehaviorSubject<Inventory[]>(this.inventory);

  constructor(private HttpClient: HttpClient) {

   }
//Aircraft CRUD functions for Warehouse table

  getAircraft(): Observable<HttpResponse<Aircraft[]>>{
    const getAllUrl = this.url + 'aircraft' ;
    return this.HttpClient.get<Aircraft[]>(this.url, {observe: 'response'})
  }
  updateAircraft(aircraft:Aircraft): Observable<HttpResponse<Aircraft>>{
    const updateTDUrl = this.url + 'aircraft';
    return this.HttpClient.put<Aircraft>(this.url,'aircraft', {observe: 'response'})
  }
  removeAircraft(): Observable<HttpResponse<Aircraft>>{
    const removeTDUrl = this.url + 'aircraft';
    return this.HttpClient.delete<Aircraft>(this.url + 'aircraft', {observe: 'response'})
  }
  postAircraft(aircraft:Aircraft): Observable<HttpResponse<Aircraft>>{
    const putTDUrl = this.url + 'aircraft';
    return this.HttpClient.post<Aircraft>(this.url,'aircraft', {observe: 'response'})
  }
//Product CRUD functions for Warehouse table

getAllProduct(): Observable<HttpResponse<Product[]>>{
  const getAllUrl = this.url + 'product' ;
  return this.HttpClient.get<Product[]>(this.url, {observe: 'response'})
}
updateProduct(product:Product): Observable<HttpResponse<Product>>{
  const updateTDUrl = this.url + 'product';
  return this.HttpClient.put<Product>(this.url,'product', {observe: 'response'})
}
removeProduct(): Observable<HttpResponse<Product>>{
  const removeTDUrl = this.url + 'product';
  return this.HttpClient.delete<Product>(this.url + 'product', {observe: 'response'})
}
postProduct(product:Product): Observable<HttpResponse<Product>>{
  const putTDUrl = this.url + 'product';
  return this.HttpClient.post<Product>(this.url,'product', {observe: 'response'})
}

//Inventory CRUD functions for Warehouse table

getAll(): void{
  this.HttpClient.get<Inventory[]>(this.url + 'inventory').subscribe(data => {
    console.log(data);
    this.inventory=data;
    this.inventoryDb.next(this.inventory)
  } )

}
updateTD(inventory:Inventory, id:number){
  this.HttpClient.put<Inventory>(this.url +'inventory/' + id, inventory).subscribe(data => {
    for(let i=0; i< this.inventory.length; i++)
      if (this.inventory[i].id ==id)
      this.inventory[i] =data
    })
}
removeTD(): Observable<HttpResponse<Inventory>>{
  const removeTDUrl = this.url + 'inventory';
  return this.HttpClient.delete<Inventory>(this.url + 'inventory', {observe: 'response'})
}
postTD(inventory:any): Observable<HttpResponse<Inventory>>{
  const putTDUrl = this.url + 'inventory';
  return this.HttpClient.post<Inventory>(this.url,'inventory', {observe: 'response'})
}
patchTD(inventory:Inventory): Observable<HttpResponse<Inventory>>{
  const putTDUrl = this.url + 'inventory';
  return this.HttpClient.patch<Inventory>(this.url,'inventory', {observe: 'response'})
}

getById(id: string): Observable<HttpResponse<any>> {
  const idURL = this.url + 'inventory' + id;
  return this.HttpClient.get<any>(idURL, { observe: 'response'});
}








}

