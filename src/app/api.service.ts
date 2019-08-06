import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Item } from './Item';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get(this.apiUrl + '/user/get-list');
  }

  postItem(item: Item): Observable<any> {
    return this.http.post(this.apiUrl + '/admin/add-data', item);
  }


  // getTokenKeyCloak(username, password) {
  //   let headers = new HttpHeaders();
  //   headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');


  //   const data = {
  //     client_id: 'front-end',
  //     username: username ,
  //     password: password ,
  //     grant_type: 'password'
  //   };
  //   return this.http.post('auth/realms/master/protocol/openid-connect/token', data, { headers: headers });
  // }
}
