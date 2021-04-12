import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomerService} from './services/customer.service';
import {HttpClientModule} from '@angular/common/http';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CheckOutPageComponent } from './components/check-out-page/check-out-page.component';
import { SellersPageComponent } from './components/sellers-page/sellers-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    CustomerPageComponent,
    NotFoundPageComponent,
    ItemPageComponent,
    HomePageComponent,
    CheckOutPageComponent,
    SellersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule,
    MatSliderModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    /*CustomerService Angular 8*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
