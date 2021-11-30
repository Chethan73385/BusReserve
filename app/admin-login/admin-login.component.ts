import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLogin } from '../AdminLogin';
import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
adminLogin:AdminLogin;
  constructor(private service:BusServiceService,
    private _router : Router) {
      this.adminLogin=new AdminLogin();
     }

  ngOnInit(): void {
  }
  adminLoginClick(){
    this.service.adminLogin(this.adminLogin)
    .subscribe((data ) => {
      console.log(data)
      if(data =="Successfull" ) {
        alert("Login successfully");
        this._router.navigate(["adminPage"]);
      }
      else{
        alert("invalid credentials");
       
      }
  }, (err) => {
      alert("something went wrong");
      console.log(err);
  })
  }
}
/*
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
      if(data == "Login Successfull") {
        alert(data)
          //this._router.navigate(["homePage"]);
      }
      else{
        alert("invalid credentials");
      }
  }, (err) => {
      alert("something went wrong");
      console.log(err);
  })
  }
}
*/