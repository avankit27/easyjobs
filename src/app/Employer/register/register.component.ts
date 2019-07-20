import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EmployerService } from '../employer.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private es:EmployerService) { }
  empRegister;

  ngOnInit() {

    this.empRegister = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      company_name: [''],
      company_website: ['', Validators.required],
      company_address: ['', Validators.required],
      company_city: ['', Validators.required],
      company_state: ['', Validators.required],
      company_profile: ['', Validators.required],
      confirm_password: ['', Validators.required]
    }, {
        validator: this.MustMatch('password', 'confirm_password')
      });
  }


  onSubmit(data) {
    console.log(data);

    this.es.postEmp(data).subscribe(m => alert('Employer Registered Successfully'));
    this.empRegister.reset();


    // stop here if form is invalid
    // if (this.empRegister.invalid) {
    //   return;
    // }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.empRegister.value))
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
