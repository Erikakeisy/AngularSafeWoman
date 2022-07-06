import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  displayedColumns: string[] = ['date', 'city', 'state','street','neighborhood','hour','dateOffense','offenseType','alone','policeReport','policeSolved','suspectParticulars','observation'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(
  ) { }

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
  // name: string;
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
  {date: '13/06/2022', city: 'Curitiba', state: 'PR', street:'Rua Leonardo Poli',neighborhood:'xaxim',hour:'13:30',dateOffense:'11/06/2022',offenseType:'Assedio',alone:'SIM',policeReport:'NAO',policeSolved:'N/A',suspectParticulars:'Idoso com camisa xadrez',observation:'Esse senhor sempre fica no bar dessa rua'},
  {date: '13/06/2022', city: 'Curitiba', state: 'PR', street:'Rua Leonardo Poli',neighborhood:'xaxim',hour:'13:30',dateOffense:'11/06/2022',offenseType:'Agressao',alone:'SIM',policeReport:'NAO',policeSolved:'N/A',suspectParticulars:'Idoso com camisa xadrez',observation:'Esse senhor sempre fica no bar dessa rua'}

];
