import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { reports } from 'src/app/models/report';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports-create',
  templateUrl: './reports-create.component.html',
  styleUrls: ['./reports-create.component.css']
})
export class ReportsCreateComponent implements OnInit {


 reports: reports = {
  openingDate:'',
  city: '',
  state: '',
  street: '',
  neighborhood: '',
  hour: '',
  date: '',
  offenseType: '',
  alone: '',
  offenseLocation: '',
  policeReport: '',
  policeSolved: '',
  suspectParticulars: '',
  observation: '',
  }

  city: FormControl =  new FormControl(null, Validators.minLength(5));
  state: FormControl =  new FormControl(null, Validators.minLength(2));
  street: FormControl =  new FormControl(null, Validators.minLength(5));
  neighborhood: FormControl =  new FormControl(null, Validators.minLength(5));
  offenseType: FormControl =  new FormControl(null, Validators.minLength(5));
  alone: FormControl =  new FormControl(null, Validators.minLength(3));
  suspectParticulars: FormControl =  new FormControl(null, Validators.minLength(7));
  offenseLocation: FormControl = new FormControl(null,Validators.minLength(3));
  
  constructor(
    private service: ReportsService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
   
  validate(): boolean{
    return this.city.valid && this.state.valid && this.street.valid && this.neighborhood.valid &&  
    this.offenseType.valid && this.alone.valid && this.suspectParticulars.valid 

  }

  create(): void{
    this.service.create(this.reports).subscribe(resposta => {
    this.toast.success('Relato Criado!', 'Novo Relato');
    this.router.navigate(['relatos']);
    }, ex => {
      console.log(ex);
      this.toast.error(ex.error.error);
    })
  }

 
}


