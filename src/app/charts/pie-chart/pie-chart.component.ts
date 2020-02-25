import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    }
  };
  public pieChartData: number[] = [350, 450, 120];
  public pieChartLabels: Label[] = ['ACME', 'PPC', 'TIGER'];
  public pieChartColors = [
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111'
    }
  ];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;

  constructor() { }

  ngOnInit() {
  }

}
