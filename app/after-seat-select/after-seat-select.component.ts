import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-seat-select',
  templateUrl: './after-seat-select.component.html',
  styleUrls: ['./after-seat-select.component.css']
})
export class AfterSeatSelectComponent implements OnInit {

  constructor() { }

  busNumber:any=sessionStorage.getItem('busNumber');
  boarding:any=sessionStorage.getItem('boarding');
  dropping:any=sessionStorage.getItem('dropping');
  journeyDate:any=sessionStorage.getItem('journeyDate');
  startTime:any=sessionStorage.getItem('startTime');
  endTime:any=sessionStorage.getItem('endTime');
  seatNo:any=sessionStorage.getItem('seatNo');
  fare:any=sessionStorage.getItem('fare');

  ngOnInit(): void {
  }

}
