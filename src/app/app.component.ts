import { Component, Output, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpService } from './http.service';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'planets';
  planetList = [];
  filteredPlanetList = [];
  stringToFilter = '';
  currentPageNumber = 1;
  itemsCount: number;
  planetCount = 0;


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

  filterListOfPlanets(searchingString){
    this.filteredPlanetList = this.planetList.filter((planet) => {
      return planet.name.toLowerCase().includes(searchingString.toLowerCase());
    });
    this.planetCount = this.filteredPlanetList.length;
  }

  ngOnInit(): void {
    this.httpService.sendAllPosts().then((result) => {
      this.filteredPlanetList = result;
      this.planetList = result;
      this.planetCount = result.length;
    });
  }

}

export interface MyPagination {
  itemsCount: number;
  pageSize: number;
}
