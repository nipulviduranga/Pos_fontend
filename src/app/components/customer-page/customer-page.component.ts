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
  customerNumber = '';
  customerNameForUpdate = '';
  customerAddressForUpdate = '';
  customerNumberForUpdate = 0;
  customerIdForUpdate='';
  customerValueForUpdate=0;
  id='';
  _id='';
  value=0;
  customerList: any[] = [];

  selectedCustomer: any = null;

  ngOnInit(): void {
    this.loadAllCustomers();
  }
  CustomerNumberGenarate(){
      this.id='C'+(this.customerList.length+1);
    }


  loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe(response => {
      this.customerList = response.dataSet;
      console.log(this.customerList)
    }, error => {
      console.log(error);
    });
  }

  saveCustomer() {
this.CustomerNumberGenarate();
    const dto = new CustomerDTO(
      this.id.trim(),
      this.customerName,
      this.customerAddress,
      Number(this.value),
      Number(this.customerNumber)
    );

    this.customerService.saveCustomer(dto).subscribe(resp => {
      alert(resp.message);
      this.loadAllCustomers();
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

  openModel(customer: any) {
    this.selectedCustomer=customer;
    document.getElementById('updatebutton').click();
    this.customerNameForUpdate=customer.name;
    this.customerAddressForUpdate=customer.address;
    this.customerIdForUpdate=customer.id;
    this.customerValueForUpdate=customer.value;
    this.customerNumberForUpdate=customer.number;
    this._id=customer._id;

  }
openModelView(customer:any){
  this.selectedCustomer=customer;
document.getElementById('detailBt').click();

}
  updateCustomer() {
    const dto = new CustomerDTO(
      this.customerIdForUpdate.trim(),
      this.customerNameForUpdate,
      this.customerAddressForUpdate,
      Number(this.customerValueForUpdate),
      Number(this.customerNumberForUpdate)

    );
    this.customerService.updateCustomer(dto, this._id).subscribe(response => {
      alert('Updated');
      this.loadAllCustomers();
    }, error => {
      console.log(error);
    });
  }

  searchCustomer() {

    if (this.customerName !== '') {
      const filteredArray = this.customerList.filter(d => {
        const data = 'name' ? d.name : d; // Incase If It's Array Of Objects.
        const dataWords = typeof data === 'string' && data?.split(' ')?.map(b => b && b.toLowerCase().trim()).filter(b => b);
        const searchWords = typeof this.customerName === 'string' && this.customerName?.split(' ').map(b => b && b.toLowerCase().trim()).filter(b => b);

        const matchingWords = searchWords.filter(word => dataWords.includes(word));

        return matchingWords.length;

      }, error => {
        console.log(error);
      });
      this.customerList = filteredArray;
    }else if(this.id !== ''){
      const filteredArray1 = this.customerList.filter(d => {
        const data = 'id' ? d.id : d; // Incase If It's Array Of Objects.
        const dataWords = typeof data === 'string' && data?.split(' ')?.map(b => b && b.toLowerCase().trim()).filter(b => b);
        const searchWords = typeof this.id === 'string' && this.id?.split(' ').map(b => b && b.toLowerCase().trim()).filter(b => b);

        const matchingWords = searchWords.filter(word => dataWords.includes(word));

        return matchingWords.length;

      }, error => {
        console.log(error);
      });
      this.customerList = filteredArray1;
    }else if(this.customerNumber !== ''){
      const filteredArray2 = this.customerList.filter(d => {
        const data = 'number' ? d.number : d; // Incase If It's Array Of Objects.
        const dataWords = typeof data === 'string' && data?.split(' ')?.map(b => b && b.toLowerCase().trim()).filter(b => b);
        const searchWords = typeof this.customerNumber === 'string' && this.customerNumber?.split(' ').map(b => b && b.toLowerCase().trim()).filter(b => b);

        const matchingWords = searchWords.filter(word => dataWords.includes(word));

        return matchingWords.length;

      }, error => {
        console.log(error);
      });
      this.customerList = filteredArray2;
    }else {
      alert('Please Input Name or Id!');
    }

  }

  LoadAll() {
    this.loadAllCustomers();
  }
}
