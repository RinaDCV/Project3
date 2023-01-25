import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttphandlerService {


  url: string = environment.apiURL;
  rawtabledata: any = {};
  tabledata = this.rawtabledata.asObserveable();


  constructor(private HttpClient: HttpClient) {


   }


  getAll(): Observable<HttpResponse<any>>{
    //come back and fix this after adding enviroment stuff
    const getAllUrl = this.url ;
    return this.HttpClient.get(this.url, {observe: 'response'})
  }
  updateTD(): Observable<HttpResponse<any>>{
    //come back and fix this after adding enviroment stuff
    const updateTDUrl = this.url + 'take in object';
    return this.HttpClient.get(this.url, {observe: 'response'})
  }
  removeTD(): Observable<HttpResponse<any>>{
    //come back and fix this after adding enviroment stuff
    const removeTDUrl = this.url + 'remainder.php info';
    return this.HttpClient.get(this.url, {observe: 'response'})
  }
  putTD(): Observable<HttpResponse<any>>{
    //come back and fix this after adding enviroment stuff
    const putTDUrl = this.url + 'remainder.php info';
    return this.HttpClient.get(this.url, {observe: 'response'})
  }
  // postTD(object): Observable<HttpResponse<any>>{
  //   //come back and fix this after adding enviroment stuff
  //   const postTDUrl = this.url;
  //   return this.HttpClient.get(this.url, {observe: 'response'})
  // }

}
