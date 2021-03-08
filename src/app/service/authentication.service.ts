import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }


  login(email: String, password: String) {
    return this.http.post('http://localhost:3003/api/clients/auth', {
      email,
      password
    })
  }
}
