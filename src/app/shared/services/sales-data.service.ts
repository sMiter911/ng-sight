import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  constructor(private _http: HttpClient) { }

  getOrders(pageIndex: number, pageSize: number) {
    return this._http.get(`${environment.apiUrl}/api/orders/${pageIndex}/${pageSize}`);
  }

  getOrdersByCustomer(n: number) {
    return this._http.get(`${environment.apiUrl}/api/orders/bycustomer/${n}`);
  }

  getOrdersByProvince() {
    return this._http.get(`${environment.apiUrl}/api/orders/byprovince/`);
  }
}

