import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-single-planet',
  templateUrl: './single-planet.component.html',
  styleUrls: ['./single-planet.component.scss']
})
export class SinglePlanetComponent implements OnInit {

  planet: SinglePlanet;
  name: string;
  hideLoader = false;
  hideContent = true;
  hide404 = true;
  error404message = 'Planet not found...';

  constructor(private planetsList: HttpService, private route: ActivatedRoute) { }

  showPlanetDetails() {
    this.route.paramMap.subscribe((param: Params) => {
      if (this.planetsList.getPlanetByName(param.get('name')) === undefined) {
        this.hideLoader = true;
        this.hide404 = false;
      } else {
        this.planet = this.planetsList.getPlanetByName(param.get('name'));
        this.hideLoader = true;
        this.hideContent = false;
      }
    this.route.queryParamMap.subscribe((query: Params) => {
      console.log(query);
      console.log(query.get('offset'));
      console.log(query.get('pageSize'));
    })
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
