import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculoComponent } from './calculo/calculo.component';
import { HomeComponent } from './home/home.component';
import { NgifComponent } from './ngif/ngif.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'calculo', component: CalculoComponent},
  { path: 'lampada', component: NgifComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
