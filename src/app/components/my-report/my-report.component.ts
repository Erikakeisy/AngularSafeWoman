import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-report',
  templateUrl: './my-report.component.html',
  styleUrls: ['./my-report.component.css']
})
export class MyReportComponent implements OnInit {
  displayedColumns: string[] = ['date', 'city', 'state','street','neighborhood','hour','dateOffense','offenseType','alone','policeReport','policeSolved','suspectParticulars','observation'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  ngAfterViewInit(){
    this.dataSource.paginator= this.paginator;
  }

}

export interface PeriodicElement {
  date: any;
  city: string;
  state: string;
  street: string;
  neighborhood: string;
  hour: any;
  dateOffense: string;
  offenseType: string;
  alone: string;
  policeReport: string;
  policeSolved: string;
  suspectParticulars: string;
  observation: string;
}

/** Constants used to fill up our data base. */
const ELEMENT_DATA: PeriodicElement [] = [
  {date: '09/07/2022', city: 'Curitiba', state: 'PR', street:'Rua Paula Gomes',neighborhood:'Centro',hour:'13:00',dateOffense:'09/07/2022',offenseType:'Assedio',alone:'SIM',policeReport:'NAO',policeSolved:'NAO',suspectParticulars:'Idoso com camisa xadrez',observation:'Esse senhor sempre fica no bar dessa rua'},
];
