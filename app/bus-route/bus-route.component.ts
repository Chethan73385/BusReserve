import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusServiceService } from '../bus-service.service';
import { BusRoute } from '../BusRoute';

@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.css']
})
export class BusRouteComponent implements OnInit {
  /*busType:BusType;
  constructor(private service: BusServiceService, private router: Router) { 
    this.busType= new BusType();
  }*/
  busRoute:BusRoute;
  constructor(private service: BusServiceService, private router: Router) {
    this.busRoute=new BusRoute();
   }

  ngOnInit(): void {
  }
  addBusRoute(){
    this.service.addBusRoute(this.busRoute).subscribe((data: BusRoute)=>{
      if(data!=null){
        alert(JSON.stringify("Bus Route successfully Added...!!!"));
       // alert("Bus Type successfully Added");
      }else{
        alert("Adding Bus  is not succesfull");
      } 
    })
  }
/*
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
*/
}
