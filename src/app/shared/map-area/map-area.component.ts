import { Component, OnInit,Input } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";

let map: google.maps.Map;
@Component({
  selector: 'app-map-area',
  templateUrl: './map-area.component.html',
  styleUrls: ['./map-area.component.scss']
})
export class MapAreaComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    const loader = new Loader({
      apiKey: "AIzaSyAni2BrGS4Ywuo8XGFIyqc6dJRaPsWJzbU",
      
    });
    
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 29.65336, lng: -82.340477 },
        zoom: 8,
      });
      new google.maps.Marker({
        position: {lat: 29.65336, lng: -82.340477},
        map,
title: "hi"
      });
    });
  }




}
