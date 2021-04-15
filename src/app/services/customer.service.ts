import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import CustomerDTO from '../dto/CustomerDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl= environment.baseUrlCustomer;
  constructor(private http: HttpClient) {
  }

  public saveCustomer(customer: CustomerDTO): Observable<any> {
    return this.http.post(this.baseUrl+'saveCustomer', {
      id: customer.id,
      name: customer.name,
      address: customer.address,
      number: customer.number,
      value: customer.value
    });
  }

  public getAllCustomers(): Observable<any> {
    return this.http.get(this.baseUrl+'getAllCustomers');
  }

  public deleteCustomer(id: string): Observable<any> {
    return this.http.delete(this.baseUrl+'/deleteCustomer',
      {headers: {id}});
  }

  /*PUT --> BODY*/
  public updateCustomer(dto:CustomerDTO, id:string): Observable<any> {
    return this.http.put(this.baseUrl+'updateCustomer',
      {
        Uid : dto.id,
        Uname: dto.name,
        Uaddress: dto.address,
        Unumber: dto.number,
        id:id
      });
  }

}
