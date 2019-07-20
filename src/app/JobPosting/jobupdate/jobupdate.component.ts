import { Component, OnInit } from '@angular/core';
import { JobprofileService } from '../jobprofile.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jobupdate',
  templateUrl: './jobupdate.component.html',
  styleUrls: ['./jobupdate.component.css']
})
export class JobupdateComponent implements OnInit {

  jpid=6;
  jobrecord;
  d;
  datestring;
  constructor(private jp :JobprofileService, private ar:ActivatedRoute) { }

  ngOnInit() {
    //this.jpid = this.ar.snapshot.params['id'];

     return this.jp.getjob(this.jpid).subscribe( j => {this.jobrecord=j; console.log(j); } );

/*       this.d =new Date(this.jobrecord['expiry_date']);
      this.datestring =("0"+(this.d.getMonth()+1)).slice(-2) +"/" +  ("0" + this.d.getDate()).slice(-2) + "/" +   + this.d.getFullYear();
      this.jobrecord['expiry_date']= this.datestring;
      console.log(this.d);
      console.log(this.datestring);

      return this.jobrecord; */
  }

  onSubmit(ju:NgForm){
    return this.jp.updatejob(this.jpid,ju.value).subscribe( r => { alert("Job successfully updated"); } );

  }
}
