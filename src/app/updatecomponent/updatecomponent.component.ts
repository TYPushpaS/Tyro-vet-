import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReqserviceService } from '../reqservice.service';

@Component({
  selector: 'app-updatecomponent',
  templateUrl: './updatecomponent.component.html',
  styleUrls: ['./updatecomponent.component.css']
})
export class UpdatecomponentComponent implements OnInit {
req:any[];
  constructor(private reqService: ReqserviceService, private router: Router) { }

  getDataFromBD(){
    this.reqService.getRequirment().subscribe(data=>{
      console.log(data);
      this.req=data.add;
      console.log(this.req);
    },err=>{
      console.log(err);
    }, ()=>{console.log('Data Got')})
  }

//   updateRequirements(updaterequirements){
//   this.reqService.updateRequirment(updaterequirements.value).subscribe(res=>{
//   console.log("requirement updated successfully");
//   alert('requirment Added Successfully');
//   this.router.navigateByUrl("/updatecomponents");
//   updaterequirements.reset;
// },  err => {
//   console.log('requirement updated successfully');
// });
//   }
  ngOnInit() {}

  addreq(requirment){
    this.reqService.updateRequirment(requirment.value).subscribe(res=>{
      console.log(this.reqService.selectedRequirment);
      this.router.navigateByUrl("get-all");
      requirment.reset();
    },
    err=>{
      console.log("not updated")

    })
  }
}
