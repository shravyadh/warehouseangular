import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemListService } from 'src/app/services/adminservices/item-list.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  item : Item[]
  constructor(private router : Router, private itemListService: ItemListService) { }

  ngOnInit() {
  }

  clicked() {
    sessionStorage.removeItem('role');
    this.router.navigate(['login'])
  }
  
}
