import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planet: SinglePlanet;
  name: string;
  showLoader = false;
  showContent = true;

  constructor(private planetsList: HttpService, private route: ActivatedRoute) { }

  showPlanetDetails() {
    this.route.paramMap.subscribe((param: Params) => {
      this.planet = this.planetsList.getPlanetByName(param.get('name'));
      this.showLoader = true;
      this.showContent = false;
    });
  }

  ngOnInit() {
    if (this.planetsList.planetList.length > 0) {
      this.showPlanetDetails();
    } else {
      this.planetsList.sendAllPosts().then((result) => {
        this.showPlanetDetails();
      });
    }
  }
}

export interface SinglePlanet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}
