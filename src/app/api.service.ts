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
}
