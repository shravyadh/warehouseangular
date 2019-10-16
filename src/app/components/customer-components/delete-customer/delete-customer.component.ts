import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/adminservices/customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  constructor(private customerService : CustomerService) { }

  ngOnInit() {
  }

  deleteCustomer(id : number)
  {
    this.customerService.deleteCustomer(id).subscribe();
  }
}
