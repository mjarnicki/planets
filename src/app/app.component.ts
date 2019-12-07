import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showPlanetsList: boolean;

  constructor( private httpService: HttpService) {
  }

  ngOnInit(): void {

    this.httpService.showHidePlanetsList().subscribe((state) => {
      this.showPlanetsList = state;
    });

  }

}
