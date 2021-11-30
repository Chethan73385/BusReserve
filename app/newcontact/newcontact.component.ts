import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit {

  constructor(private cc:ContactService, private router:Router) { }

  ngOnInit(): void {
  }
  c:Contact=new Contact();
  
  submitContact(contactForm:any){
    this.c=new Contact();
    this.c=contactForm.value;
    this.cc.addContact(this.c);
    contactForm.reset();
  }

  moveBack(){
    this.router.navigate(['home']);
  }

}
