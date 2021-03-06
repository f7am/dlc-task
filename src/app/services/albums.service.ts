import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AlbumsService {

  private _url = 'http://jsonplaceholder.typicode.com/albums'; // url to the API

  constructor(private _http: HttpClient) { }

  getAlbums() {
    return this._http.get(this._url) // send get request to the API
      .catch(this.errorHandle);
  }

  errorHandle(error: HttpErrorResponse) { // check if the observable throws errors and return them
    return Observable.throw(error.message || 'Server-Side Error');
  }

}
