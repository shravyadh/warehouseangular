import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from '../models/user'
import { Observable } from 'rxjs';
import { API_LOGIN_PATH } from '../../environments/environment';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient ) { }
  
  validate( user : User ) : Observable<Role>
  {
    return this.http.post<Role>(API_LOGIN_PATH, user);
  }


}