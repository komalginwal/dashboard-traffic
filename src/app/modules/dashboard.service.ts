import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { 
    
  }
  bigChart() {
    return [{
      name: 'Serious',
      data: [298, 517, 748, 1435, 1034, 892,949,987]
    }, {
      name: 'Fatal',
      data: [40, 82, 133,  278, 217, 190,214,254]
    
    }];
  }
  info() {
    return [ {
      name: 'Fatal',
      data: [452, 231, 125]
  }, {
    name: 'Severe',
    data: [202, 563, 125]
  
  }];

}
line(){
  return [{
    name: 'Serious',
    data: [1412, 1313, 1544, 1453, 1357, 46]
}, {
    name: 'Fatal',
    data: [297, 323, 330, 298, 227, 5]
}];
}

markers(){
  return [{
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
      lng: 82.384064,
      label: 5,
      draggable: true
    }
  ];

}
}
