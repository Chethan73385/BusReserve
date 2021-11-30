import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search:string="";
  contactArray=new Array<Contact>();


  constructor(private cc:ContactService, private router:Router, private actv:ActivatedRoute) { }

  ngOnInit(): void {
    this.contactArray=this.cc.showContact();
    this.contactArray.sort((a, b) => a.fname < b.fname ? -1 : a.fname > b.fname ? 1 : 0)
  }

  delContact(i:number){
    this.cc.deleteContact(i);
  }

  toNewContact(){
    this.router.navigate(['newcontact']);
  }

}
