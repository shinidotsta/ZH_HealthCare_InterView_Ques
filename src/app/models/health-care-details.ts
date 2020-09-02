export class HealthCareDetails {
    Batchfilename : string;
    BatchID : string;
    Insurances :string;
    Date : string;
    noofclaims :string;
    Rejectedclaims :string;
    createduser :string;
    partner :string;
    
    constructor(Batchfilename,BatchID,Insurances,Date,noofclaims,Rejectedclaims,createduser,partner)
    {
      this.Batchfilename=Batchfilename;
      this.BatchID=BatchID;
      this.Insurances=Insurances;
      this.Date=Date;
      this.noofclaims=noofclaims;
      this.Rejectedclaims=Rejectedclaims;
      this.createduser=createduser;
      this.partner=partner;
    }

}
