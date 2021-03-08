import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  creatRegister(client:Object) {
    return this.http.post('http://localhost:3003/api/clients/', client)
  }
}
