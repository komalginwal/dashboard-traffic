import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatDividerModule } from '@angular/material/divider'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatMenuModule } from '@angular/material/menu'
import { MatListModule } from'@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';

import { InfoComponent } from './info/info.component';
import { PieComponent } from './pie/pie.component';
import { MapAreaComponent } from './map-area/map-area.component';
import { LineComponent } from './line/line.component';
import { DemoMapComponent } from './demo-map/demo-map.component';
import { AgmCoreModule } from '@agm/core';
import { CrashEventComponent } from './crash-event/crash-event.component';





@NgModule({

  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    
    InfoComponent,
    PieComponent,
    MapAreaComponent,
    LineComponent,
    DemoMapComponent,
    CrashEventComponent,
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    AgmCoreModule,
    
    
    

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
   InfoComponent,
   PieComponent,
   MapAreaComponent,
   LineComponent,
   DemoMapComponent,
   CrashEventComponent
   
   
   
    
  ]
})
export class SharedModule { 
  
}
