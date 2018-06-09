import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class FetchAllInfoService {

  public baseURL = 'https://www.anapioficeandfire.com/api';
  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log('handle http error');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getAllBooks() {
    let myResponse;
    myResponse = this._http.get(this.baseURL + '/books');
    return myResponse;
  }

  public getAllCharacters() {
    let myResponse;
    myResponse = this._http.get(this.baseURL + '/characters');
    return myResponse;
  }

  public getAllHouses() {
    let myResponse;
    myResponse = this._http.get(this.baseURL + '/houses');
    return myResponse;
  }

  // routing to a particular object
  public getView(option, selection) {
    let myResponse;
    myResponse = this._http.get(this.baseURL + '/' + option + '/' + selection);
    return myResponse;
  }

}
