import { Component, OnInit } from '@angular/core';
import { JobprofileService } from '../jobprofile.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jobposting',
  templateUrl: './jobposting.component.html',
  styleUrls: ['./jobposting.component.css']
})
export class JobpostingComponent implements OnInit {
  jobpost;
  eid=103;
  today;
  constructor(private js :JobprofileService) { }

  ngOnInit() {

  }

  onSubmit(jp:NgForm){
    
    this.today = Date.now();
    console.log(this.today);
    console.log(jp.value);
       
    return this.js.postjob(jp.value).subscribe( r => { alert("Job Posted successfully"); jp.reset(); } );
    
  }

}
