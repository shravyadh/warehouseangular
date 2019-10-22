import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/adminservices/item.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  constructor(private itemService : ItemService) { }

  ngOnInit() {
  }

  deleteItem(id : number)
  {
    this.itemService.deleteItem(id).subscribe();
  }
}
