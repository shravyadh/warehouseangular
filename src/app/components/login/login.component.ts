import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service'
import { Role } from 'src/app/models/role';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  role: Role;
  invalidLogin =false;

  constructor(private router: Router, private loginService : LoginService) { }

  ngOnInit() {
    if(sessionStorage.getItem("role") != undefined || sessionStorage.getItem("role") != null) {
      this.router.navigate(["admin"])
    }
  }

  validate(user : User ) : void{
    this.loginService.validate(user).subscribe(role => {
      sessionStorage.setItem('role', role.code)
      if(role.code == 'AD')
      {
        this.router.navigate(['admin'])
      }
      else if(role.code == 'MANF')
      {
        this.router.navigate(['merchant'])
      }
     })
  }
}
