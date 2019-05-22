import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {

  }

  // Register a new user with the system.
  registerUser() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
    .subscribe( // store the token in local storage.
      res => {console.log(res);
      localStorage.setItem('token', res.token)
      this._router.navigate(['/special']) // navigate to the specialevents view which is for members only.
      },
      err => console.log(err)
    )
  }

}
