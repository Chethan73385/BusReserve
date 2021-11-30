import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BusServiceService } from '../bus-service.service';
import { UserLogin } from '../UserLogin';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
 
  userLogin:UserLogin;
  constructor(private service:BusServiceService,
    private _router : Router) { 
      this.userLogin= new UserLogin();
    }

  ngOnInit(): void {
  }

  userLoginClick(){
    this.service.userLogin(this.userLogin)
    .subscribe((data ) => {
      console.log(data)
      if(data ==null) {
        alert("invalid credentials");
      }
      else{
       
        alert("Login successfully");
        
      }
  }, (err) => {
      alert("something went wrong");
      console.log(err);
  })
  }
 
}




