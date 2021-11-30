import { Component, OnInit } from '@angular/core';
import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-get-all-bus-route',
  templateUrl: './get-all-bus-route.component.html',
  styleUrls: ['./get-all-bus-route.component.css']
})
export class GetAllBusRouteComponent implements OnInit {
BusRoute: any[]

  constructor(private service:BusServiceService) { }
getAllBusRoute(){
  this.service.getAllBusRoute().subscribe((data)=>this.displayData(data));
}
myData: any;
  displayData(data: Object){
    this.myData=data
  }

  ngOnInit(): void {
    this.getAllBusRoute();
  }
/*
Reservation: any[];
  getAllreservation(){
    this.service.getAllReservation().subscribe((data)=>this.displayData(data));
  }

  myData;
  displayData(data){
    this.myData=data
  }
  ngOnInit(): void {
    this.getAllreservation();
  }
*/
}
