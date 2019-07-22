import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  server:string = `localhost`;
  api:string = `http://${this.server}/easyjobs/api/employer`;
  
  
  // http://localhost/easyjobs/api/employer
  constructor(private http: HttpClient) { }

  loginEmp(email,pas){
    console.log(`${this.api}?id=${email}&pass=${pas}`);
    return this.http.get(`${this.api}?id=${email}&pass=${pas}`)   // Here id is the email as first parameter is id in web api
    
  }

  getEmp(eid){
    return this.http.get(`${this.api}/${eid}`)

  }

  postEmp(data){
    return this.http.post(`${this.api}`,data)
  }

  updateEmp(id,data){
    return this.http.put(`${this.api}/${id}`,data)
  }

}
