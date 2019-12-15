import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single-planet',
  templateUrl: './single-planet.component.html',
  styleUrls: ['./single-planet.component.scss']
})
export class SinglePlanetComponent implements OnInit {

  planet: SinglePlanet;
  name: string;
  showLoader = false;
  showContent = true;
  show404 = true;
  error404message = 'Planet not found...';

  constructor(private planetsList: HttpService, private route: ActivatedRoute) { }

  showPlanetDetails() {
    this.route.paramMap.subscribe((param: Params) => {
      if (this.planetsList.getPlanetByName(param.get('name')) === undefined) {
        this.showLoader = true;
        this.show404 = false;
      } else {
        this.planet = this.planetsList.getPlanetByName(param.get('name'));
        this.showLoader = true;
        this.showContent = false;
      }
    });
  }

  typeOf(value) {
    return typeof value;
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
