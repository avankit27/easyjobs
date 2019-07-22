import { Component } from '@angular/core';
import { EmployerService } from './Employer/employer.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easyjobs';
  flag = true;
  js = false;
  emp = false;
  jid;
  eid;
  js_name;
  emp_name;
  emp_email;   // For Login
  emp_pass;    // For Login

  constructor(private es: EmployerService,private router: Router) {
    this.flag = true;
    if (sessionStorage.getItem("eid")) {
      this.flag = false;
      this.emp = true;
      console.log("EmployerSession is there");
      this.eid = sessionStorage.getItem("eid");
      this.emp_name = sessionStorage.getItem("emp_name");

    }
    else if (sessionStorage.getItem("jid")) {
      this.flag = false;
      this.js = true;
      console.log("Jobseeker Session is there");
      this.jid = sessionStorage.getItem("jid");
      this.js_name = sessionStorage.getItem("js_name");

    }
    else {
      this.flag = true;
      this.js = false;
      this.emp = false;
      console.log("No Session is there");
    }
  }

  ngOnInit() {
  }

  onLoginEmp(emp: NgForm) {
    this.emp_email = emp.value['email'];
    this.emp_pass = emp.value['password'];
    console.log(this.emp_email);
    console.log(this.emp_pass);
    return this.es.loginEmp(this.emp_email, this.emp_pass).subscribe(e => this.checkLogin(e, emp));

    //, err => alert("Username or password is Wrong")
  }

  checkLogin(em, emp: NgForm) {
    if (em == null) {
      alert("Email or Password is Wrong");
      emp.reset();
    }
    else {
      sessionStorage.setItem('eid', em.eid);
      sessionStorage.setItem('emp_name', em.company_name);
      alert('Successfully logged In');
      this.router.navigateByUrl('/employer');

    }
  }

  onLoginJs() {

  }
}
