import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-portal',
  templateUrl: './payment-portal.component.html',
  styleUrls: ['./payment-portal.component.css']
})
export class PaymentPortalComponent implements OnInit {

  constructor() { }
  fare:any=sessionStorage.getItem('fare');
  busNumber:any=sessionStorage.getItem('busNumber');
  boarding:any=sessionStorage.getItem('boarding');
  dropping:any=sessionStorage.getItem('dropping');
  journeyDate:any=sessionStorage.getItem('journeyDate');
  startTime:any=sessionStorage.getItem('startTime');
  endTime:any=sessionStorage.getItem('endTime');
  seatNo:any=sessionStorage.getItem('seatNo');
  ngOnInit(): void {
  }
  payment(){
    alert("Payment Done");
    alert("Your Reservation is Successfully Done");
  }
}
