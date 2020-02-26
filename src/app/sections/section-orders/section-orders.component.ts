import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {
  orders: Order[] = [
    {id: 1, customer: {id: 1, name: 'Wandu', email: 'd_wandz@yahoo.com', province: 'Gauteng'},
    total: 200, placed: new Date(2020, 2, 25), fulfilled: new Date(2020, 2, 26)},
    {id: 2, customer: {id: 1, name: 'Wandu', email: 'd_wandz@yahoo.com', province: 'Gauteng'},
    total: 200, placed: new Date(2020, 2, 25), fulfilled: new Date(2020, 2, 26)},
    {id: 3, customer: {id: 1, name: 'Wandu', email: 'd_wandz@yahoo.com', province: 'Gauteng'},
    total: 200, placed: new Date(2020, 2, 25), fulfilled: new Date(2020, 2, 26)},
    {id: 4, customer: {id: 1, name: 'Wandu', email: 'd_wandz@yahoo.com', province: 'Gauteng'},
    total: 200, placed: new Date(2020, 2, 25), fulfilled: new Date(2020, 2, 26)},
    {id: 5, customer: {id: 1, name: 'Wandu', email: 'd_wandz@yahoo.com', province: 'Gauteng'},
    total: 200, placed: new Date(2020, 2, 25), fulfilled: new Date(2020, 2, 26)}
  ];

  constructor() { }

  ngOnInit() {
  }

}
