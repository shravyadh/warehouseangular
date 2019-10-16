import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemListService } from 'src/app/services/adminservices/item-list.service';
import { Item } from 'src/app/models/item';
import { stringify } from 'querystring';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  item : Item[];
  admin : User;
  constructor(private router : Router, private itemListService: ItemListService) { }

  ngOnInit() {
    this.admin = JSON.parse(sessionStorage.getItem('admin'));
    // console.log(sessionStorage.getItem('role'))
  }

  logout() {
    sessionStorage.removeItem('admin');
    this.router.navigate(['login'])
  }
  
}
