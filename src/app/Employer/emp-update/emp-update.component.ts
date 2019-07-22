import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.css']
})
export class EmpUpdateComponent implements OnInit {

  idd;
  emprecord;
  constructor(private es :EmployerService, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.idd = this.ar.snapshot.params['id'];
    return this.es.getEmp(this.idd).subscribe( r => {this.emprecord=r; } );
  }

  onSubmit(data){
    return this.es.updateEmp(this.idd,data).subscribe( r => { alert("Employer successfully updated");} );

  }

}
