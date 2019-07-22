import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  eid;
  emp_name;

  constructor() {
    this.eid = sessionStorage.getItem('eid');
    this.emp_name = sessionStorage.getItem('ename');

  }

  ngOnInit() {
  }

}
