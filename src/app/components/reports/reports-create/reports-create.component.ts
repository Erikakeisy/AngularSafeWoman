import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reports-create',
  templateUrl: './reports-create.component.html',
  styleUrls: ['./reports-create.component.css']
})
export class ReportsCreateComponent implements OnInit {

  city: FormControl =  new FormControl(null, Validators.minLength(5));
  state: FormControl =  new FormControl(null, Validators.minLength(2));
  street: FormControl =  new FormControl(null, Validators.minLength(5));
  neighborhood: FormControl =  new FormControl(null, Validators.minLength(5));
  // hour: FormControl =       new FormControl(null, Validators.maxLength(3));
  // dateOffense: FormControl =  new FormControl(null, Validators.minLength(8));
  offenseType: FormControl =  new FormControl(null, Validators.minLength(5));
  alone: FormControl =  new FormControl(null, Validators.minLength(3));
  // policeReport: FormControl =  new FormControl(null, Validators.minLength(3));
  // policeSolved: FormControl =  new FormControl(null, Validators.minLength(3));
  suspectParticulars: FormControl =  new FormControl(null, Validators.minLength(7));
  // observation :FormControl =  new FormControl(null, Validators.minLength(7));
  
  constructor() { }

  ngOnInit(): void {
  }

  validate(): boolean{
    return this.city.valid && this.state.valid && this.street.valid && this.neighborhood.valid &&  
    this.offenseType.valid && this.alone.valid && this.suspectParticulars.valid 

  }
  
}

// return this.city.valid && this.state.valid && this.street.valid && this.neighborhood.valid && this.hour.valid && this.dateOffense.valid 
// && this.offenseType.valid && this.alone.valid && this.policeReport.valid && this.policeSolved.valid && this.suspectParticulars.valid && this.observation.valid
