import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerPageComponent} from './components/customer-page/customer-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {CheckOutPageComponent} from './components/check-out-page/check-out-page.component';
import {ItemPageComponent} from './components/item-page/item-page.component';
import {SellersPageComponent} from './components/sellers-page/sellers-page.component';

const routes: Routes = [
  {path: '', component: CustomerPageComponent},
  {path: 'Customers', component: CustomerPageComponent},
  {path: 'Home', component: HomePageComponent},
  {path: 'CheckOut', component: CheckOutPageComponent},
  {path: 'Items', component: ItemPageComponent},
  {path: 'Sellers', component: SellersPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
