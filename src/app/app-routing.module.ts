import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { MyReportComponent } from './components/my-report/my-report.component';
import { NavComponent } from './components/nav/nav.component';
import { PhonesComponent } from './components/phones/phones.component';
import { ReportsCreateComponent } from './components/reports/reports-create/reports-create.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
{
  path: '', component: NavComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'relatos', component: ReportsComponent},
    {path: 'telefones', component: PhonesComponent},
    {path: 'relatos/criar', component: ReportsCreateComponent},
    {path: 'mapa', component: MapComponent},
    {path: 'meusrelatos', component: MyReportComponent},
    {path: 'meusrelatos/criar', component: ReportsCreateComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
