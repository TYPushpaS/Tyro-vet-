import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headeroption = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ReqserviceService {

  url: string = 'http://localhost:8082/talenthunt';
  //for update requirement
  selectedRequirment: any = {
    clientId: null,
    client: null,
    technology: null,
    yoe: null,
    location: null,
    nop: null,
    odate: null,
    cdate: null,
    role: null,
    rate: null,
    poc: null,
    jd: null,
    uname: null,
    time: null
  }
  constructor(private http: HttpClient) { }

  addRequirment(data) {
    return this.http.post(`${this.url}/addrequirement`, data, headeroption);
  }
  
  updateRequirment(data) {
    return this.http.put(`${this.url}/update`, data, headeroption);
  } 
  
  getRequirment() {
    return this.http.get<any>(`${this.url}/get-all`, headeroption);
  }

addCandidate(data){
  return this.http.post(`${this.url}/createCandidate`, data,headeroption);

}


}
