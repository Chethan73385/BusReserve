import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { BusServiceService } from '../bus-service.service';
import { BusOutput } from '../BusOutput';
import { Search } from '../Search';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  journeyDate:any;
  search:Search=new Search();
  searchBus:BusOutput[];

  constructor(private service:BusServiceService) { }

  
  ngOnInit(): void {
  }
 
  Ahmedabad: boolean= false;
  Mumbai: boolean= false;
  Goa: boolean= false;
  showf=true;
  selectedsrc: any;

  handleEvent(event){
    this.selectedsrc= event.value;
    this.setFalse();

  }
  setFalse() {
    switch (this.selectedsrc) {
      case 'Ahmedabad': this.Ahmedabad = true;
        break;
      case 'Mumbai': this.Mumbai = true;
        break;
      case 'Goa': this.Goa = true;
        break;
    }
  }
  handleClick(){   
    switch (this.selectedsrc) {
      case 'Ahmedabad': this.Ahmedabad = false;
        break;
        case 'Mumbai': this.Mumbai = false;
        break;
        case 'Goa': this.Goa = false;
        break;
    }
  }
  checkUser:boolean=false;
  show(){
   this.showf=false;
    sessionStorage.setItem('journeyDate', this.journeyDate)
   sessionStorage.setItem('boarding',this.search.boarding)
   sessionStorage.setItem('dropping',this.search.dropping)
}

searchBusForAuthorised(){
  //<HTMLInputElement>document.getElementById("1")).ng-RouterLinkWithHref
  this.checkUser=true;
 this.search.typeOfUser="Authorised";
 this.service.searchBus(this.search).subscribe((searchBus:BusOutput[])=>{
   this.searchBus=searchBus;
 })
 }

 searchBusForUnauthorised(){
  this.checkUser=true;
 this.search.typeOfUser="Unauthorised";
  this.service.searchBus(this.search).subscribe((searchBus:BusOutput[])=>{
    this.searchBus=searchBus;
  })
  }

  busObj:BusOutput;
    showFun(c:BusOutput){
      this.busObj=c;
      sessionStorage.setItem("busNumber",""+c.busNumber);
      sessionStorage.setItem('routeNo',""+c.routeNo);
      sessionStorage.setItem('startTime',""+c.startTime);
      sessionStorage.setItem('endTime',""+c.endTime);
     sessionStorage.setItem('fare',""+c.fare);
     
    }

  

}































/* Ahmedabad: boolean= false;
  Mumbai: boolean= false;
  Goa: boolean= false;
  showf=true;
  selectedsrc: any;
  

  handleEvent(event){
    this.selectedsrc= event.target.value;
    this.setFalse();

  }
  setFalse() {
    switch (this.selectedsrc) {
      case 'Ahmedabad': this.Ahmedabad = true;
        break;
      case 'Mumbai': this.Mumbai = true;
        break;
      case 'Goa': this.Goa = true;
        break;
    }
  }
  handleClick(){   
    switch (this.selectedsrc) {
      case 'Ahmedabad': this.Ahmedabad = false;
        break;
        case 'Mumbai': this.Mumbai = false;
        break;
        case 'Goa': this.Goa = false;
        break;
    }
  }*/


/*searchBusForAuthorised(){
  this.checkUser=true;
 this.search.typeOfUser="Authorised";
 this.service.searchBus(this.search).subscribe((searchBus:BusOutput[])=>{
   this.searchBus=searchBus;
 })
 }
 searchBusForUnauthorised(){
  this.checkUser=true;
  this.search.typeOfUser="Unauthorised";
  //alert(JSON.stringify(this.search))
  this.service.searchBus(this.search).subscribe((searchBus:BusOutput[])=>{
    this.searchBus=searchBus;
  })
  }

  busObj:BusOutput;
    showFun(c:BusOutput){
      this.busObj=c;
      sessionStorage.setItem("busNumber",""+c.busNumber);
      sessionStorage.setItem('routeNo',""+c.routeNo);
      sessionStorage.setItem('start',""+c.startTime);
      sessionStorage.setItem('end',""+c.endTime);
     sessionStorage.setItem('fare',""+c.fare);
     
    }*/