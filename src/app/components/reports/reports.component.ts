import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { reports } from 'src/app/models/report';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  ELEMENT_DATA: reports [] = []

  displayedColumns: string[] = ['date', 'city', 'state','street','neighborhood','hour','openingDate','offenseType','alone','policeReport','policeSolved','suspectParticulars','observation','offenseLocation'];
  dataSource = new MatTableDataSource<reports>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private service: ReportsService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta =>{
     this.ELEMENT_DATA = resposta
     this.dataSource = new MatTableDataSource<reports>(this.ELEMENT_DATA);
    })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  
}
 
