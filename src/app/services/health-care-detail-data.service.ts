import { Injectable } from '@angular/core';
import {  HealthCareDetails } from "../models/health-care-details";

@Injectable({
  providedIn: 'root'
})
export class HealthCareDetailDataService {

  healthcaredata :HealthCareDetails[]=[
    new HealthCareDetails('ww','ee','tt','yy','uu','ii','ui','yuyiu'),
  ];
  getHealthcareData():HealthCareDetails[]{
    return this.healthcaredata;
  }
}
