import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerPageComponent} from './components/customer-page/customer-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', component: CustomerPageComponent},
  {path: 'Customer', component: CustomerPageComponent},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
