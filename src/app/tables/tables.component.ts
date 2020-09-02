import { Component, OnInit } from '@angular/core';
import { HealthCareDetailDataService } from "../services/health-care-detail-data.service";
import {  HealthCareDetails } from "../models/health-care-details";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent  implements OnInit {

  healthcaredatass :HealthCareDetails[];
  constructor(private healthcareservice :HealthCareDetailDataService){

  }
ngOnInit(){
this.healthcaredatass=this.healthcareservice.getHealthcareData();
console.log(this.healthcaredatass);
}

 
}
