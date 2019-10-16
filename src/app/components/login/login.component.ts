import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/loginservice/login.service'
import { Role } from 'src/app/models/role';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  invalidLogin = false;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    // if (sessionStorage.getItem("role") != undefined || sessionStorage.getItem("role") != null) {
    //   this.router.navigate(["admin"])
  }


  validate(user: User): void {
    this.loginService.validate(user).subscribe(user => {
      if (user.person.role.code == 'AD') {
        sessionStorage.setItem('admin', JSON.stringify(user));
        this.router.navigate(['admin']);
      }
      else if (user.person.role.code== 'MANF') {
        sessionStorage.setItem('merchant', JSON.stringify(user));
        this.router.navigate(['merchant']);
      }
    })
  }
}
