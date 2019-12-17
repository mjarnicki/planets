import { Component, OnInit } from '@angular/core';
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
  showLoader = false;
  showContent = true;
  columnNumber = 'col-1';


  constructor( private httpService: HttpService) {
    }

  filterValue(searchingString) {
    this.stringToFilter = searchingString;
    this.filterListOfPlanets(searchingString);
    this.currentPageNumber = 1;
  }

  paginationValue(event: number) {
    this.currentPageNumber = event;
  }

  setPaginationLength(event) {
    this.itemsCount = event;
    this.currentPageNumber = 1;
    console.log(event);
    this.changeColumnNumber(event);
  }

  changeColumnNumber(event: string) {
    if (event === '5') { this.columnNumber = 'col-1'; }
    if (event === '10') { this.columnNumber = 'col-2'; }
    if (event === '25' || event === '100') { this.columnNumber = 'col-5'; }
  }

  filterListOfPlanets(searchingString) {
    this.filteredPlanetList = this.planetList.filter((planet) => {
      return planet.name.toLowerCase().includes(searchingString.toLowerCase());
    });
    this.planetCount = this.filteredPlanetList.length;
  }

  loadData(): void {
    this.filteredPlanetList = this.httpService.filteredPlanetList;
    this.planetList = this.httpService.planetList;
    this.planetCount = this.httpService.planetCount;
    this.showLoader = true;
    this.showContent = false;
  }

  ngOnInit(): void {
    if (this.httpService.planetList.length === 0) {
      this.httpService.sendAllPosts().then(() => {
        this.loadData();
      });
    } else {
      this.loadData();
    }
  }

}

export interface MyPagination {
  itemsCount: number;
  pageSize: number;
}
