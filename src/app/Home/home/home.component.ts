import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployerService } from 'src/app/Employer/employer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jid;
  eid;
  js_name;
  emp_name;
  emp_email;   // For Login
  emp_pass;    // For Login

  constructor(private es: EmployerService,private router: Router) { 
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

}


