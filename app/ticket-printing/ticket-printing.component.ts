import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-printing',
  templateUrl: './ticket-printing.component.html',
  styleUrls: ['./ticket-printing.component.css']
})
export class TicketPrintingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ticketPrint(){
    alert("Print Sucessfull");
  }
  
  fare:any=sessionStorage.getItem('fare');
  busNumber:any=sessionStorage.getItem('busNumber');
  boarding:any=sessionStorage.getItem('boarding');
  dropping:any=sessionStorage.getItem('dropping');
  journeyDate:any=sessionStorage.getItem('journeyDate');
  startTime:any=sessionStorage.getItem('startTime');
  endTime:any=sessionStorage.getItem('endTime');
  seatNo:any=sessionStorage.getItem('seatNo');
}
