import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/adminservices/customer.service';
import { Customer } from 'src/app/models/customer';
import { GetCustomerComponent } from '../get-customer/get-customer.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer : Customer; 


  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    
  }

}
