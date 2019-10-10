import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service'
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  role: Role;

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  validate(user : User ) : void{
    this.loginService.validate(user).subscribe(role => {
      if(this.role.code == 'AD')
      {
        
      }
      else if(this.role.code == 'MAN'){ 

      }
    })
  }
}
