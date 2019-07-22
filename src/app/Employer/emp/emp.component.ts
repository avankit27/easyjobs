import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  eid;
  emp_name;

  constructor(private router:Router) {
    this.eid = sessionStorage.getItem('eid');
    this.emp_name = sessionStorage.getItem('emp_name');
    console.log(this.eid );
    console.log(this.emp_name );

  }

  ngOnInit() {
  }

  signout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }
}
