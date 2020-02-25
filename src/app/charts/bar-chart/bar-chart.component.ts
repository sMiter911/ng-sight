import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

const SAMPLE_BARCHART_DATA: ChartDataSets[] = [
  {data: [12, 34, 67, 89, 23, 55, 70], label: 'Fall Sales'},
  {data: [34, 4, 12, 87, 53, 87, 60], label: 'Winter Sales'},
];

const SAMPLE_BARCHART_LABELS: Label[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7']

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public barChartData: ChartDataSets[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: Label[] = SAMPLE_BARCHART_LABELS;
  public barChartType: ChartType = 'bar';
  public barChartLegend: true;
  public barChartOptions: ChartOptions = {
    responsive: true,
    showLines: true
  };

  constructor() { }

  ngOnInit() {
  }

}
