import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import CustomerDTO from '../dto/CustomerDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  public saveCustomer(customer: CustomerDTO): Observable<any> {
    return this.http.post('http://localhost:3000/api/v1/customerRoute/saveCustomer', {
      name: customer.name,
      address: customer.address,
      salary: customer.salary,
      image: customer.image,
      other: customer.other
    });
  }

  public getAllCustomers(): Observable<any> {
    return this.http.get('http://localhost:3000/api/v1/customerRoute/getAllCustomers');
  }

  public deleteCustomer(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/api/v1/customerRoute/deleteCustomer',
      {headers: {id}});
  }

  /*PUT --> BODY*/
  public updateCustomer(dto:CustomerDTO, id:string): Observable<any> {
    return this.http.put('http://localhost:3000/api/v1/customerRoute/updateCustomer',
      {
        name: dto.name,
        address: dto.address,
        salary: dto.salary,
        id:id
      });
  }

}
