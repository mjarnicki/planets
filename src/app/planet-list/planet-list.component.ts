import { Component, Output, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  title = 'planets';
  planetList = [];
  filteredPlanetList = [];
  planetCount = 0;
  stringToFilter = '';
  currentPageNumber = 1;
  itemsCount: number;


  constructor( private httpService: HttpService) {  }

  filterValue(searchingString) {
    this.stringToFilter = searchingString;
    this.filterListOfPlanets(searchingString);
    this.currentPageNumber = 1;
  }

  paginationValue(event) {
    this.currentPageNumber = event;
  }

  setPaginationLength(event) {
    this.itemsCount = event;
    this.currentPageNumber = 1;
  }

  filterListOfPlanets(searchingString) {
    this.filteredPlanetList = this.planetList.filter((planet) => {
      return planet.name.toLowerCase().includes(searchingString.toLowerCase());
    });
    this.planetCount = this.filteredPlanetList.length;
  }

  ngOnInit(): void {
    if (this.httpService.planetList.length === 0) {
      this.httpService.sendAllPosts().then((result) => {
        console.log(result);
        this.filteredPlanetList = this.httpService.filteredPlanetList;
        this.planetList = this.httpService.planetList;
        this.planetCount = this.httpService.planetCount;
      });
    } else {
        this.filteredPlanetList = this.httpService.filteredPlanetList;
        this.planetList = this.httpService.planetList;
        this.planetCount = this.httpService.planetCount;
    }
  }

}

export interface MyPagination {
  itemsCount: number;
  pageSize: number;
}
