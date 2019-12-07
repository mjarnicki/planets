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
    // if (this.planet. > 0) {
      console.log('jednak poszło');
      this.route.paramMap.subscribe((param: Params) => {
        console.log(param);
        this.planet = this.planetsList.getPlanetByName(param.get('name'));
      });
      this.planetsList.showHide();
    // }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.planetsList.showHide();
  }
}
