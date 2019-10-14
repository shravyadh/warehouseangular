import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemListService } from 'src/app/services/adminservices/item-list.service'
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  item : Item[]
  constructor(private itemListService : ItemListService) { }

  ngOnInit() {
    this.getItems();
  }
  
  getItems() {
    this.itemListService.getItems().subscribe(item => {
      this.item = item
    })
  }
}
