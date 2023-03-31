
import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  title = 'angular-google-maps-app';
  lat: number = 33.510414;
  lng: number = 36.278336;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 33.510414, lng: 36.278336 },
    zoom: 10,

  }
  marker = {
    lat: this.lat, lng: this.lng,
  }
  onClick(e: any) {
    console.log('lat: ' + e.latLng.lat()
    )
    // this.lat = e.latLng.lat();
    console.log(e
    )
    // this.lng = e.latLng.lng()
    this.marker = {
      lat: e.latLng.lat(), lng: e.latLng.lng(),
    }
  }

  openInfoWindow(gg: any) {
    this.infoWindow.open(gg);
  }

}
