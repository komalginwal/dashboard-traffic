import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  constructor() { }
  chartOptions: {} ={};
  Highcharts = Highcharts;
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
      
      
      series: [ {
        name: 'Fatal',
        data: [452, 231, 125]
      
      },
      {
        name: 'Severe',
        data: [202, 563, 125]
      
      }]
    };
    HC_exporting(Highcharts);

  }

}
