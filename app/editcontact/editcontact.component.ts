import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {

  phone:any;
  contact=new Contact();

  constructor(private cc:ContactService, private router:Router, private actv:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.phone=this.actv.snapshot.paramMap.get('phone');
    this.contact=this.cc.findContact(this.phone);
  }

  submitContact(contactForm:any){
    this.contact=contactForm.value;
    this.cc.updateContact(this.contact);
    contactForm.reset();
  }

  moveBack(){
    this.router.navigate(['home']);
  }

}
