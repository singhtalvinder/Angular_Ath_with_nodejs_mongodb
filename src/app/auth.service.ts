import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl =    "http://localhost:3000/api/login";

  constructor(private http: HttpClient,
    private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    // double negate as we need only the boolean result and not the token.
    const isToken = !!localStorage.getItem('token')
    console.log('LoggedIn : ' + isToken)
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    // remove token from localstorage and navigate back to the regular events.
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
