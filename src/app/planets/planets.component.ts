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

  showPlanetDetails() {
    this.route.paramMap.subscribe((param: Params) => {
      this.planet = this.planetsList.getPlanetByName(param.get('name'));
    });
  }

  ngOnInit() {
    if (this.planetsList.planetList.length > 0) {
      // this.planetsList.showHide();
      this.showPlanetDetails();
    } else {
      // this.planetsList.showHide();
      this.planetsList.sendAllPosts().then((result) => {
        this.showPlanetDetails();
      });
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  // ngOnDestroy(): void {
  //   this.planetsList.showHide();
  // }
}
