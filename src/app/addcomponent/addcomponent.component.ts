import { Component, OnInit } from '@angular/core';
import { ReqserviceService } from '../reqservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcomponent',
  templateUrl: './addcomponent.component.html',
  styleUrls: ['./addcomponent.component.css']
})
export class AddcomponentComponent implements OnInit {

  constructor(private reqService: ReqserviceService, private router: Router) { }

  addRequirments(addRequirment) {
    this.reqService.addRequirment(addRequirment.value).subscribe(res => {
      console.log('requirment added successfully');
      alert('requirment Added Successfully')
      this.router.navigateByUrl("/update");
      addRequirment.reset();
    }, err => {
      console.log('Requirment is  not added');
    });
  }

  ngOnInit() {
  }

}
