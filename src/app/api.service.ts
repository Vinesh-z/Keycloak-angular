import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Item } from './Item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get('http://localhost:8000/user/get-list');
  }

  postItem(item: Item): Observable<any> {
    return this.http.post('http://localhost:8000/admin/add-data', item);
  }
}
