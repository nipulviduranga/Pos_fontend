import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import CustomerDTO from '../dto/CustomerDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public saveCustomer(customer: CustomerDTO): Observable<any>{
    return this.http.post('http://127.0.0.1:3000/api/v1/customerRoute/saveCustomer', {
      name: customer.name,
      address: customer.address,
      salary: customer.salary,
      image: customer.image,
      other: customer.other
    });
  }

}
