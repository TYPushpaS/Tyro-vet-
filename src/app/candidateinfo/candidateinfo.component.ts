import { Component, OnInit } from '@angular/core';
import { ReqserviceService } from '../reqservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidateinfo',
  templateUrl: './candidateinfo.component.html',
  styleUrls: ['./candidateinfo.component.css']
})
export class CandidateinfoComponent implements OnInit {

  constructor(private reqService: ReqserviceService, private router: Router) { }

  ngOnInit() {
  }
  addRequirments(candidateInfo){
this.reqService.addCandidate(candidateInfo.value).subscribe(res => {
  console.log('candidate added successfully');
  alert('candidate added successfully')
  this.router.navigateByUrl("/candidateInfo");
  candidateInfo.reset();
}, err => {
  console.log('Candidate is not added');
});
  }
}
