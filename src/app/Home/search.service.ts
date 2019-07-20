import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  server: string = `localhost`;
  api: string = `http://${this.server}/easyjobs/api/search`;

  constructor(private http:HttpClient) { }

  searchAll(){
    return this.http.get(`${this.api}`);
  }

  searchOne(id:number){
    //console.log(`${this.api}/${id}`);
    return this.http.get(`${this.api}/${id}`);
  }
  
}
