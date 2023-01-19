import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttphandlerService {

  url: String = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
  //url: string = environment.apiURL;
  //tabledata: any = {};
  

  constructor(private HttpClient: HttpClient) {
 

   }


  getAll(): Observable<HttpResponse<any>>{
    //come back and fix this after adding enviroment stuff
    //const randomURL = this.url + 'remainder.php info';
    return this.HttpClient.getAll(this.url, {observe: 'response'})
  }

}
