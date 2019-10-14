import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/adminservices/customer.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent {

  customer: Customer;
  c = 0
  @Input() custId: number;
  constructor(private customerService: CustomerService) { }

  ngOnChanges() {
    console.log(this.c++);
    
    this.customerService.getCustomer(this.custId).subscribe(data => {
      this.customer = data
    },
    (error) => {
      this.customer = null
    }
    )
  }

  ngOnInit() {

  }
}
