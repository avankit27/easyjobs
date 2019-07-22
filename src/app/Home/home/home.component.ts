import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { 
    if (sessionStorage.getItem("eid")) {
      this.router.navigateByUrl('/employer');
      console.log("In Employer Session Home Component");

    }
    else if (sessionStorage.getItem("jid")) {
      this.router.navigateByUrl('/jobseeker');
      console.log("In Jobseeker Session Home Component");

    }
    else{
      this.router.navigateByUrl('/home');
      console.log("In No Session Home Component");

    }
    
  }

  ngOnInit() {
    
  }

}
