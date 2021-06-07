import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  chartOptions: {} ={};
  @Input() data: any = [];
  Highcharts = Highcharts;
  constructor() { }
  ngOnInit(){
    this.chartOptions= 
    {
      title: {
        text: ' Monthly'
    },

    xAxis: {
      categories: ['January', 'February', 'March', 'April', 'May','June']
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            }
        }
    },

    series: this.data,

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

    
}
HC_exporting(Highcharts);
}
}