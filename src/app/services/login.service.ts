import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from '../models/user'
import { Observable } from 'rxjs';
import { API_LOGIN_PATH } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient ) { }
  
  validate( user : User ) : Observable<User>
  {
    return this.http.post<User>(API_LOGIN_PATH, user);
  }


}