import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flag = true;
  js = false;
  emp = false;
  jid;
  eid;
  js_name;
  emp_name;
  constructor() {
    if (sessionStorage.getItem("eid")) {
      this.flag = false;
      this.emp = true;
      console.log("in if");
      this.eid = sessionStorage.getItem("eid");
      this.emp_name = sessionStorage.getItem("emp_name");

    }
    else if (sessionStorage.getItem("jid")) {
      this.flag = false;
      this.js = true;
      console.log("in else if");
      this.jid = sessionStorage.getItem("jid");
      this.js_name = sessionStorage.getItem("js_name");

    }
    else {
      this.flag = true;
      this.js = false;
      this.emp = false;
      
    }
    console.log(this.flag);
  }

  ngOnInit() {
  }

}
