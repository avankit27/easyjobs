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
  title = 'easyjobs';s
  constructor(private es: EmployerService,private router: Router) {  }

}
