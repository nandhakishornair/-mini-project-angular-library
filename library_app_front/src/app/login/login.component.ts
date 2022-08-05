import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
// import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // public get auth(): AuthService {
  //   return this._auth;
  // }
 
  
  user={uname:'',
  password:''}

  constructor(private _auth: AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser () {
    
    this._auth.loginUser(this.user)
    // .subscribe(
    //   res => {
    //     localStorage.setItem('token', res.token)
    //     this._router.navigate(['/products'])
    //   },
    //   err => {
    //     console.log(err);
    //     this._router.navigate(['/products'])
    //   }
    // )
    .subscribe({
      next: res => {
            localStorage.setItem('token', res.token)
            this._router.navigate(['/'])
          } ,
      error: err => {
            console.log(err);
            alert("wrong username or password");
            this._router.navigate(['/Signin'])
          }
   }); 
  }

}
