import { Injectable } from '@angular/core';
import { Api_Get_Customer } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customer';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  getCustomer(id : number) : Observable<Customer>
  {
    return this.http.get<Customer>(Api_Get_Customer + id);
  }
}
