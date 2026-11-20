import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersManagementService {

  constructor(
    protected http: HttpClient
  ) { }

  getListUsers(payload: { page?: number; per_page?: number } = {}) {
    //https://dummyjson.com/products
    //https://jsonplaceholder.typicode.com/users
    return this.http.get<any>('https://reqres.in/api/users', {
      params: {
        page: String(payload.page || 1),
        per_page: String(payload.per_page || 6)
      }
    });
  }
}
