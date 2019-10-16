import { Injectable } from '@angular/core';
import { Api_Get_Customer, Api_Add_Customer, Api_Delete_Customer } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customer';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/address';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(Api_Get_Customer + id);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(Api_Add_Customer, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(Api_Delete_Customer + id)
  }
}
