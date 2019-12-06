import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planet: object;
  name: string;

  constructor(private planetsList: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      // this.name = param.get('name');
      this.planet = this.planetsList.getPlanetByName(param.get('name'))
      // this.planetsList.getPlanetByName('aaa');
      // console.log(this.name);
      console.log(this.planet);
    });
  }

}
