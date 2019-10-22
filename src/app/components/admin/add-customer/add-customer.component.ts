import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/adminservices/customer.service';
import { Customer } from 'src/app/models/customer';
import { FormGroup, FormControl } from '@angular/forms';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/adminservices/country.service';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  countries: Country[];
  constructor(private customerService: CustomerService, private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    phone_number: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      pincode: new FormControl(''),
      country: new FormControl('')
    })
  })

  addCustomer(customer: Customer) {
    customer.user = JSON.parse(sessionStorage.getItem('admin')) ;
    console.log(customer);
    this.customerService.addCustomer(customer).subscribe()
  }

  getCountries() {
    
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
    })
  }
}
