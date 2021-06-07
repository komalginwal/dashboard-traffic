import { Component, OnInit,Input } from '@angular/core';

import { MouseEvent  } from '@agm/core';
@Component({
  selector: 'app-demo-map',
  templateUrl: './demo-map.component.html',
  styleUrls: ['./demo-map.component.scss']
})
export class DemoMapComponent implements OnInit {
  
  
  constructor() { }
  
 
  
    ngOnInit(){
      
    }
    zoom: number = 8;
  
  // initial center position for the map
  lat: number = 29.65336;
  lng: number = -82.340477;
    
   
    clickedMarker(label: number, index: number) {
      console.log(`clicked the marker: ${label || index}`)
    }
    
    mapClicked($event: MouseEvent) {
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: true,
        
      });
    }
    
    markerDragEnd(m: marker, $event: MouseEvent) {
      console.log('dragEnd', m, $event);
    }
    markers: marker[] = [
      {
        lat: 29.65336,
        lng: -82.340477,
        label: 1,
        draggable: true
      },
      {
        lat: 29.627061,
        lng: -82.372452,
        label: 2,
        draggable: false
      },
      {
        lat: 29.627653,
        lng: -82.37244,
        label: 3,
        draggable: true
      },
      {
        lat: 29.623165,
        lng: -82.390096,
        label: 4,
        draggable: true
      },
      {
        lat: 29.620315,
        lng: -82.384064,
        label: 5,
        draggable: true
      }
    ]
}
interface marker {
	lat: number;
	lng: number;
	label?: number;
	draggable: boolean;
}