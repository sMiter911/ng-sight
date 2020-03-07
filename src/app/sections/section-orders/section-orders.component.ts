import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/order';
import {  SalesDataService } from '../../shared/services/sales-data.service'

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  orders: Order[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  constructor( private salesData: SalesDataService) { }

  ngOnInit() {
    this.getOrders()
  }

  getOrders() {
    this.salesData.getOrders(this.page, this.limit).subscribe( res => {
      console.log('Result from getOrders: ', res);
      this.orders = res['page']['data'];
      this.total = res['page'].total;
      this.loading = false;
    })
  }

  goToPrevious(): void {
    console.log('Previous Button Clicked');
    this.page--;
    this.getOrders();
  }

  goToNext(): void {
    console.log('Next Button Clicked');
    this.page++;
    this.getOrders();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getOrders();
  }

}
