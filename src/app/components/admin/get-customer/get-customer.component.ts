import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/adminservices/customer.service';
import { Customer } from 'src/app/models/customer';
import { Router } from '@angular/router';



@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent {

  @Input() id: number;
  customer : Customer;
  constructor(private customerService: CustomerService) { }

  ngOnChanges() {
     
    this.customerService.getCustomer(this.id).subscribe(customer => {
      // console.log(customer);
      if(customer!=null)
      this.customer = customer
      // this.router.navigate[('getcustomer')]
      // console.log(this.customer);
      // alert(this.customer.name);
      // document.getElementById("d").innerHTML = JSON.stringify(this.customer);
      
    },
    (error) => {
      this.customer = null
    }
    )
  }

  ngOnInit() {
    // this.getCustomer(this.custId);
  }

 
  // getCustomer(id: number): Customer {
  //   console.log(id);
    
  //   this.customerService.getCustomer(id).subscribe(customer => {
  //     // console.log(customer);
      
  //     this.customer = customer
  //     // this.router.navigate[('getcustomer')]
  //     // console.log(this.customer);
  //     // alert(this.customer.name);
  //     // document.getElementById("d").innerHTML = JSON.stringify(this.customer);
  //     return this.customer
      
  //   },
  //   (error) => {
  //     this.customer = null
  //   }
  //   )
  //   return this.customer
  // }

  hello()
  {
    console.log('hello');
    
  }
}
