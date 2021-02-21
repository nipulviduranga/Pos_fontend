import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import CustomerDTO from '../../dto/CustomerDTO';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }

  customerName = '';
  customerAddress = '';
  customerSalary = 0;

  customerList: any[] = [];

  ngOnInit(): void {
    this.loadAllCustomers();
  }

  loadAllCustomers(){
    this.customerService.getAllCustomers().subscribe(response => {
      this.customerList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  saveCustomer() {

    const dto = new CustomerDTO(
      this.customerName.trim(),
      this.customerAddress.trim(),
      Number(this.customerSalary),
      'no-image',
      []
    );

    this.customerService.saveCustomer(dto).subscribe(resp => {
      alert(resp.message);
    }, error => {
      console.log(error);
    });
  }

  deleteCustomer(_id: string) {
    if (confirm('Are You sure?')) {
      this.customerService.deleteCustomer(_id).subscribe(respose => {
        this.loadAllCustomers();
        alert('Deleted!');
      }, error => {
        console.log(error);
      });
    }
  }
}
