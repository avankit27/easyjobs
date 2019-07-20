import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobprofileService {

  server: string = `localhost`;
  api: string = `http://${this.server}/easyjobs/api/jobposting`;

  constructor(private http: HttpClient) { }

  getjob(id) {
    return this.http.get(`${this.api}/${id}`)

  }

  postjob(data) {
    return this.http.post(`${this.api}`, data)
  }

  updatejob(id, data) {
    return this.http.put(`${this.api}/${id}`, data)
  }

}
