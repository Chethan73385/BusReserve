import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusServiceService } from '../bus-service.service';
import { AllBookedSeats } from '../home-page/AllBookedSeats';
import { bookedSeatNo } from '../home-page/BookedSeatNo';
import { Reservation } from '../Reservation';



@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css']
})
export class SeatSelectComponent implements OnInit {

  constructor(private service:BusServiceService,  private _router : Router) { }

  ngOnInit(): void { 
  }




addReserve:Reservation = new Reservation();
journDate:any;
seatNumber:number;
message:string;
addReservation(){
  if(this.seatNumber==null){
    alert(JSON.stringify("Seat Not Selected...!!!"));
   this._router.navigate(["/seatSelection"]);
  }
  else{
    sessionStorage.setItem('seatNo',""+this.seatNumber);
    this.journDate=sessionStorage.getItem('journeyDate');
    this.addReserve.journeyDate=this.journDate;
    this.addReserve.seatNo=this.seatNumber;
    
    this.service.addReservation(this.addReserve).subscribe((message:string)=>{
      this.message=message;
          console.log("Hello");  })
  }
 

}


}



















//bookdedSeat:number[]=[];
//bookedNo: bookedSeatNo;
//allBookedSeats: AllBookedSeats = new AllBookedSeats();

/*findTickets(){
  this.allBookedSeats.busNumber=sessionStorage.getItem('busNumber');
    this.allBookedSeats.journeyDate=sessionStorage.getItem('journeyDate');
    this.allBookedSeats.boarding=sessionStorage.getItem('boarding');
    this.allBookedSeats.dropping=sessionStorage.getItem('dropping');
    alert(JSON.stringify(this.allBookedSeats))
    this.service.bookedSeats(this.allBookedSeats).subscribe((bookedNo:bookedSeatNo)=>{
      this.bookedNo=bookedNo;
      console.log("Hello");
      console.log(this.bookedNo);
      console.log(typeof (this.bookedNo.seat[1]));
      for(let i=0;i<this.bookedNo.seat.length;i++){
        this.bookdedSeat[i]=this.bookedNo.seat[i];
      }
      console.log("everyone");
    })
}*/

