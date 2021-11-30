import { Component, OnInit } from '@angular/core';
import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-get-all-reservation',
  templateUrl: './get-all-reservation.component.html',
  styleUrls: ['./get-all-reservation.component.css']
})
export class GetAllReservationComponent implements OnInit {

  constructor(private service:BusServiceService) { }

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

}


