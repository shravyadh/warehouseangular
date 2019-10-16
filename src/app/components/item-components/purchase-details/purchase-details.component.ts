import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.css']
})
export class PurchaseDetailsComponent implements OnInit {

  // purchases : Purchase[];
  constructor() { }

  ngOnInit() {
  }

  // getPurchaseList()
  // {
  //   this.purchaseService.getPurchaseList().subscribe(purchases =>
  //     {
  //       this.purchases = purchases
  //     })
  // }
}
