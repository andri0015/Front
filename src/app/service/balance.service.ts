import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  
  constructor(private http: HttpClient) { }

  balance(client:String) {
    return this.http.get('http://localhost:3003/api/accounts/' +  client)
  }
}
