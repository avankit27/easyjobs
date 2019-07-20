import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-jobdescription',
  templateUrl: './jobdescription.component.html',
  styleUrls: ['./jobdescription.component.css']
})
export class JobdescriptionComponent implements OnInit {

  idd;
  data;
  constructor(private s: SearchService, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.idd = this.ar.snapshot.params['id'];
    console.log(this.idd);
    return this.s.searchOne(this.idd).subscribe( r => {this.data=r;console.log(r);} );
  }

}
