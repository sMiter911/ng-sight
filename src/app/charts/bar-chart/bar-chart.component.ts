import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { SalesDataService } from 'src/app/shared/services/sales-data.service';
import * as moment from 'moment';

// const SAMPLE_BARCHART_DATA: ChartDataSets[] = [
//   {data: [12, 34, 67, 89, 23, 55, 70], label: 'Fall Sales'},
//   {data: [34, 4, 12, 87, 53, 87, 60], label: 'Winter Sales'},
// ];

// const SAMPLE_BARCHART_LABELS: Label[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7']

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  orders: any;
  orderLabels: string[];
  orderDate: number[];

  public barChartData: ChartDataSets[];
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend: true;
  public barChartOptions: ChartOptions = {
    responsive: true,
    showLines: true
  };

  constructor(private salesDataService: SalesDataService) { }

  ngOnInit() {
    this.salesDataService.getOrders(1, 100).subscribe(res => {
      console.log(res['page']['data']);
      const localChartData = this.getChartData(res);
      this.barChartLabels = localChartData.map(x => x[0]).reverse();
      this.barChartData = [{data: localChartData.map(x => x[1]), label: 'Sales'}];
    });
  }

  getChartData(res: any) {
    this.orders = res['page']['data'];
    const data = this.orders.map(o => o.total);
    const p = [];

    const formatedOrders = this.orders.reduce((r, e) => {
      r.push([moment(e.placed).format('YYYY-MM-DD'), e.total]);
      return r;
    }, []);

    const chartData = formatedOrders.reduce((r, e) => {
      const key = e[0];
      if (!p[key]) {
        p[key] = e;
        r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    console.log(chartData);
    return chartData;

  }

}
