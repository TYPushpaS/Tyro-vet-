import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ReqserviceService } from '../reqservice.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  req:any[];

  constructor(private requirementservice : ReqserviceService, private router:Router) {
    this.getDataFromBd();
  }
  getDataFromBd() {
     this.requirementservice.getRequirment().subscribe(data => { console.log(data);
       this.req = data.add; 
       console.log(this.req);
       }, err => { 
         console.log(err);
         }, () => { 
           console.log('Got The data')
           });
           }
  ngOnInit() {
  }
  updateReq(requirment){    
    this.requirementservice.selectedRequirment=requirment;    
    console.log(this.requirementservice.selectedRequirment);    
    this.router.navigateByUrl("/updatecomponent"); 
   }
}
