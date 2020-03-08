import { Component, OnInit } from '@angular/core';
import { SalesDataService } from 'src/app/shared/services/sales-data.service';

@Component({
  selector: 'app-section-sales',
  templateUrl: './section-sales.component.html',
  styleUrls: ['./section-sales.component.css']
})
export class SectionSalesComponent implements OnInit {

  salesDataByCustomer: any;
  salesDataByProvince: any;

  constructor(private salesDataService: SalesDataService) { }

  ngOnInit() {
    this.salesDataService.getOrdersByProvince().subscribe(res => {
      this.salesDataByProvince = res;
    });

    this.salesDataService.getOrdersByCustomer(5).subscribe(res => {
      this.salesDataByCustomer = res;
    });
  }

}
