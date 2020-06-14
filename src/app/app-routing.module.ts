import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PaymentComponent} from './payment/payment.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: 'food',component: HomeComponent},
  {path: 'payment',component:PaymentComponent},
  {path: '**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
