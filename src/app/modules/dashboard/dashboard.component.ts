import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigChart = {};
  info = {};
  line = {};
  markers={} ;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.info = this.dashboardService.info();
    this.line = this.dashboardService.line();
    this.markers = this.dashboardService.markers();
   }

}
