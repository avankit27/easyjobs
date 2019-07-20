import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-jobpanel',
  templateUrl: './jobpanel.component.html',
  styleUrls: ['./jobpanel.component.css']
})
export class JobpanelComponent implements OnInit {

  jobs;

  constructor(private s: SearchService) { }

  ngOnInit() {
    this.s.searchAll().subscribe(j=> this.jobs=j);
  }

}
