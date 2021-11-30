import { Component, OnInit } from '@angular/core';
import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private service:BusServiceService) { }
  Reservation: any[]|undefined;
  BusRoute: any[]|undefined;
  getAllreservation(){
    this.service.getAllReservation().subscribe((data)=>this.displayData(data));
  }
  getAllBusRoute(){
    this.service.getAllBusRoute().subscribe((data)=>this.displayData(data));
  }
  /*myData;
    displayData(data){
      this.myData=data
    }*/
  ngOnInit(): void {
    
  }
  myData:any;
  displayData(data:any){
    this.myData=data
  }
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