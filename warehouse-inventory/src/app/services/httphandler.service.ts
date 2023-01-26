import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
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
  tableitem = this.rawtabledata.asObserveable();


  constructor(private HttpClient: HttpClient) {

   }
//Aircraft CRUD functions for Warehouse table

  getAll(): Observable<HttpResponse<Aircraft[]>>{
    const getAllUrl = this.url + 'aircraft' ;
    return this.HttpClient.get<Aircraft[]>(this.url, {observe: 'response'})
  }
  updateTD(aircraft:Aircraft): Observable<HttpResponse<Aircraft>>{
    const updateTDUrl = this.url + 'aircraft';
    return this.HttpClient.put<Aircraft>(this.url,'aircraft', {observe: 'response'})
  }
  removeTD(): Observable<HttpResponse<Aircraft>>{
    const removeTDUrl = this.url + 'aircraft';
    return this.HttpClient.delete<Aircraft>(this.url + 'aircraft', {observe: 'response'})
  }
  postTD(aircraft:Aircraft): Observable<HttpResponse<Aircraft>>{
    const putTDUrl = this.url + 'aircraft';
    return this.HttpClient.post<Aircraft>(this.url,'aircraft', {observe: 'response'})
  }

}
