import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as mapboxgl from 'mapbox-gl';
import { call } from 'src/app/functions/call';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-findplace',
  templateUrl: './findplace.page.html',
  styleUrls: ['./findplace.page.scss'],
})
export class FindplacePage implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
  suggestions :any = [];
  suggestionsHidden = true;
  suggestionsTimer;
  searchText = "";
  address;
  constructor(private modal: ModalController, private cd: ChangeDetectorRef){
    
  }
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    const position = new mapboxgl.LngLat(coordinates.coords.longitude, coordinates.coords.latitude);
    this.map.setCenter(position);
  }
  async ngOnInit(){
    this.getCurrentPosition();
    
  }
  ngAfterViewInit() {
    
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/dbd80b8b-ff9e-4007-ad90-e6bd876268c3/style.json?key=nCyEILFw38Wa1KIqpqNb',
      center: [0, 0],
      zoom: 17,
    });
    this.map.on('load', (event) => {
      this.map.loadImage('http://127.0.0.1:8100/assets/pointer.png', (error, image) => {
        if (error) throw error;
        this.map.addImage("pointer", image);
      });
      this.map.resize();
    });
    this.getCurrentPosition();
    this.map.addControl(new mapboxgl.NavigationControl());

  }
  back(){
    this.modal.dismiss();
  }
  async search(query){
    if (this.suggestionsTimer){
      clearInterval(this.suggestionsTimer);
    }
    this.suggestionsTimer = setTimeout(() => {
      this.loadSuggestions(query);
    }, 500);
  }
  async loadSuggestions(query){
    this.suggestions = [];
    try{
      if (query.length > 5){
        let transformed = query.replace(/([^A-Za-z0-9\-\_\ ]+)/g, '');
        transformed = transformed.replace(/([\ \n])/g, '+');
        let results : any = await call("https://photon.komoot.io/api/?q=" + transformed, {})
        results = JSON.parse(results);
        this.suggestions = [];
        if (results.features){
          this.suggestionsHidden = false;
          this.map.resize();
          for (var i = 0; i < results.features.length; i++){
            let result = results.features[i];
            let properties = result.properties;
            let name = "";
            if (properties.osm_value == "house"){
              name = properties.housenumber + " " + properties.street + " " + properties.city + ", " + properties.state + ", " + properties.country;
            }else if (properties.osm_value == "residential"){
              name = properties.name + " " + properties.city + ", " + properties.state + ", " + properties.country;
            }else if (properties.osm_value == "city"){
              name = properties.name + ", " + properties.state + ", " + properties.country;
            }else if (properties.osm_value == "park"){
              name = properties.name + ", " + properties.city + ", " + properties.state + ", " + properties.country;
            }else if (properties.osm_value == "stadium"){
              name = properties.name + " - " + properties.housenumber + " " + properties.street + " " + properties.city + ", " + properties.state + ", " + properties.country;
            }else if (properties.osm_value == "swimming_pool"){
              name = properties.name + " - " + properties.housenumber + " " + properties.street + " " + properties.city + ", " + properties.state + ", " + properties.country;
            }else if (properties.osm_value == "townhall"){
              name = properties.name + " - " + properties.street + " " + properties.city + ", " + properties.state + ", " + properties.country;
            }else{
              if (properties.name){
                name += properties.name + " - "
              }
              if (properties.housenumber){
                name += properties.housenumber + " "
              }
              if (properties.street){
                name += properties.street + " "
              }
              if (properties.city){
                name += properties.city + ", "
              }
              if (properties.state){
                name += properties.state + ", "
              }
              if (properties.country){
                name += properties.country + ", "
              }
            }
            
            this.suggestions.push({
              title: name,
              position: result.geometry.coordinates
            });

            this.map.resize();
          }
        }
        this.map.resize();
      }else{
        this.suggestionsHidden = true;
        this.map.resize();
      }
    }catch(error){
      console.error(error);
      
    }
  }
  moveToPosition(index){
    this.searchText = this.suggestions[index].title;
    this.address = this.suggestions[index];
    const position = new mapboxgl.LngLat(this.suggestions[index].position[0], this.suggestions[index].position[1]);
    this.map.setCenter(position);
    this.suggestionsHidden = true;
    try{
      this.map.removeLayer("point");
      this.map.removeSource("point");
    }catch{}
    
    this.map.addSource('point', {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [
          {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [this.suggestions[index].position[0], this.suggestions[index].position[1]]
            }
          }
        ]
      }
    } as any);
    this.map.addLayer({
      'id': 'point',
      'type': 'symbol',
      'source': 'point',
      'layout': {
        'icon-image': 'pointer',
        'icon-size': 0.25
      }
    });
    

    this.map.setZoom(17);
    setTimeout(() => {
      this.map.resize();
    }, 0)
  }
  chooseAddress(){
    this.modal.dismiss(this.address);
  }
}
