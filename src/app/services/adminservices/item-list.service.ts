import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Api_Get_Items } from 'src/environments/environment';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  constructor(private http : HttpClient) { }

  getItems() : Observable<Item[]>
  {
    return this.http.get<Item[]>(Api_Get_Items)
  }
}
