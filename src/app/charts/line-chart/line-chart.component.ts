import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.color'
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [12, 34, 56, 78, 90, 120], label: 'Sentiment Analysis'},
  {data: [23, 34, 45, 56, 67, 78], label: 'Image Recognition'},
  {data: [21, 35, 12, 45, 67, 99], label: 'Forecasting'}
];

const LINE_CHART_LABELS: string[] = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'
];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] =  LINE_CHART_SAMPLE_DATA;
  public lineChartLabels: Label[] = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors: Color[] = LINE_CHART_COLORS;

  constructor() { }

  ngOnInit() {
  }

}
