import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = "users/login";
  constructor(private http: HttpClient) { }
  loginUser(user:any)
  {
    return this.http.post<any>(this._loginUrl, user)
    // .subscribe((data) =>{console.log(data)})
  }
  // new registrations...
  newLogin(item:any)
  {   
    // return this.http.post("http://localhost:3000/users/signin",{"users":item})
    return this.http.post("users/signin",{"users":item})
    .subscribe(data =>{console.log(data)})
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}
