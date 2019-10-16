import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api_Delete_Item } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http : HttpClient) { }

  deleteItem(id : number):Observable<Item>
  {
    return this.http.delete<Item>(Api_Delete_Item + id);
  }
}
