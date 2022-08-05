import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService,private router: Router) { }
  Login={
    name:'',
    email:'',
    username:'',
    password:''
  };
  ngOnInit(): void {
  }
  AddUser()
  {    
    this.auth.newLogin(this.Login);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/login']);
  }
}

