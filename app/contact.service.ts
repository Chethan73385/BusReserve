import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactArray = new Array<Contact>();
  c:Contact;

  addContact(c:Contact){
    this.contactArray.push(c);
  }

  showContact(){
    return this.contactArray;
  }

  deleteContact(i:number){
    this.contactArray.splice(i,1);
  }

  findContact(phonenum:number){
    for(let cc of this.contactArray){
      if(cc.phone==phonenum){
        this.c=cc;
        break;
      }
    }
    return this.c;
  }

  updateContact(c:Contact){
    for(let cc of this.contactArray){
      if(c==cc){
          cc=c;
          break;
      }
    }
  }

  constructor() { 
    this.c=new Contact();
  }
}
