import { Component, OnInit,Input } from '@angular/core';
import { HealthCareDetails } from '../models/health-care-details';

@Component({
  selector: 'app-repeat-table',
  templateUrl: './repeat-table.component.html',
  styleUrls: ['./repeat-table.component.css']
})
export class RepeatTableComponent implements OnInit {

  @Input() DataItem : HealthCareDetails;
  constructor() { }

  ngOnInit(): void {
  }
  showVar: boolean = false;

  toggleChild(){
      this.showVar = !this.showVar;
  }
}
