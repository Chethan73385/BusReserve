import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusServiceService } from '../bus-service.service';
import { UserRegistration } from './UserRegistration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userRegistration : UserRegistration;
  constructor(private service: BusServiceService, private router: Router) {
    this.userRegistration=new UserRegistration();
   }

  ngOnInit(): void {
  }
  onRegisterClick() {
    this.service.userRegistration(this.userRegistration).subscribe((data: UserRegistration)=>{
      if(data !=null) {
        alert("Registration is successful");
        this.router.navigate(["login"]);
      }
      else{
        alert("Registration not succesful");
      }
    },(err) =>{
      alert("something went wrong");
      console.log(err); 
    })
  }
  
}
