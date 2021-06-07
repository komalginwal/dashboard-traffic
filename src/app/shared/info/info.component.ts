import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'my-app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }
  Highcharts = Highcharts;
  @Input()
  label!: string;
  @Input()
  total!: string;
  @Input()
  percentage!: string;
  @Input() data: any = [];
  chartOptions: {} ={};
  ngOnInit(): void {
    this.chartOptions= 
    {
      chart: {
          type: 'area',
        
          
      },
      
      subtitle: {
          text: "Annual fatalities trend"
      
      },
      tooltip: {
          outside:true,
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false,
      },
      legend:{
enabled: false
      },
    
      title: {
        text: null
      },
      xAxis: {
        categories: ['2015-17','2017-19','2019-21']
      },
      
      
      series: this.data
    };
    HC_exporting(Highcharts);

  }

}
