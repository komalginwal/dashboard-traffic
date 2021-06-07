import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions: {} ={};
  @Input() data: any = [];
  Highcharts = Highcharts;
  constructor() { }
  ngOnInit(){
    this.chartOptions= 
    {
      chart: {
          type: 'column'
      },
      
      subtitle: {
          text: null
      
      },
      tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
    
      title: {
        text: 'Age Group'
      },
      xAxis: {
        categories: ['under 15', '15-19', '20-24', '25-34', '35-44','45-54','55-64','65+']
      },
      yAxis: {
        min:0,
        title:{ text: 'Number of accidents'}
      },
      
      series: this.data
    };
    HC_exporting(Highcharts);
    
  
  }


}

/*[{
  name: 'Fatal',
  data: [298, 517, 748, 1435, 1034, 892,949,987]
}, {
  name: 'Serious',
  data: [40, 82, 133,  278, 217, 190,214,254]

}]*/