import { Component, OnInit } from '@angular/core';
import { JobprofileService } from '../jobprofile.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobposting',
  templateUrl: './jobposting.component.html',
  styleUrls: ['./jobposting.component.css']
})
export class JobpostingComponent implements OnInit {
  jobpost;
  eid;
  today;
  constructor(private js :JobprofileService,private ar:ActivatedRoute) { }

  ngOnInit() {
    this.eid = this.ar.snapshot.params['id'];

  }

  onSubmit(jp:NgForm){
    
    this.today = Date.now();
    console.log(this.today);
    console.log(jp.value);
       
    return this.js.postjob(jp.value).subscribe( r => { alert("Job Posted successfully"); jp.reset(); } );
    
  }

}
