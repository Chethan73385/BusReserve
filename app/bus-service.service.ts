import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Search } from './Search';
import { BusOutput } from './BusOutput';
import { Reservation } from './Reservation';
import { AllBookedSeats } from './home-page/AllBookedSeats';
import { bookedSeatNo } from './home-page/BookedSeatNo';
import { UserLogin } from './UserLogin';
import { AdminLogin } from './AdminLogin';
import { UserRegistration } from './registration/UserRegistration';
import { BusType } from './BusType';
import { BusRoute } from './BusRoute';



@Injectable({
  providedIn: 'root'
})
export class BusServiceService {

  constructor(private http:HttpClient) { }


searchBus(search:Search):Observable<any>{
  let url="http://localhost:9098/searchbus";
    return this.http.post<BusOutput>(url,search);
}
addReservation(resObj:Reservation):Observable<any>{
  let url="http://localhost:9098/addreservation";
  return this.http.post<string>(url,resObj);
}
getAllReservation(){
  return this.http.get("http://localhost:9098/getAllReservations");
}
getAllBusRoute(){
  return this.http.get("http://localhost:9098/getAllBusRoutes");
}
bookedSeats(findSeats:AllBookedSeats):Observable<any>{
  let url="http://localhost:9098/bookedSeats";
  return this.http.post<bookedSeatNo>(url,findSeats);
}
/*url ='http://localhost:8080/login';
userLogin(userLogin:UserLogin)
  {
    return this.http.post(this.url,userLogin,{responseType: 'text'});
  }*/
  url ='http://localhost:9098/login';
userLogin(userLogin:UserLogin)
  {
    return this.http.post(this.url,userLogin,{responseType: 'text'});
  }
  url1 ='http://localhost:9098/adminLogin';
  adminLogin(adminLogin:AdminLogin)
  {
    return this.http.post(this.url1,adminLogin,{responseType: 'text'});
  }
  url2='http://localhost:9098/addregistration';
  userRegistration(user:UserRegistration):Observable<UserRegistration>{
    return this.http.post<UserRegistration>(this.url2,user);
  }
  addBusType(busObj:BusType):Observable<any>{
    let url="http://localhost:9098/addBusType";
    return this.http.post<string>(url,busObj);
  }
  addBusRoute(routeObj:BusRoute):Observable<any>{
    let url="http://localhost:9098/addBusRoute";
    return this.http.post<string>(url,routeObj);
  }

}
