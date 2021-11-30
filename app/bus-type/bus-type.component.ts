import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusServiceService } from '../bus-service.service';
import { BusType } from '../BusType';

@Component({
  selector: 'app-bus-type',
  templateUrl: './bus-type.component.html',
  styleUrls: ['./bus-type.component.css']
})
export class BusTypeComponent implements OnInit {
  busType:BusType;
  constructor(private service: BusServiceService, private router: Router) { 
    this.busType= new BusType();
  }
  
  ngOnInit(): void {
  }
  addbusType(){
    this.service.addBusType(this.busType).subscribe((data: BusType)=>{
      if(data!=null){
        alert(JSON.stringify("Bus Type successfully Added...!!!"));
       // alert("Bus Type successfully Added");
      }else{
        alert("Adding Bus Type is not succesfull");
      }
    })
  }
  /*onRegisterClick() {
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
  }*/
}
