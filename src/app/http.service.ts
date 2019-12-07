import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  planetList = [];
  filteredPlanetList = [];
  planetCount = 1;
  planetsListDisplay = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getPlanetByName(name: string) {
    if (this.planetList.length > 0){
      return this.planetList.find(e => e.name.toLowerCase().replace(' ', '-') === name);
    } else {
    }
  }

  async sendAllPosts(): Promise<any> {
    const index = await this.getNumberOfRequests();
    const planetList = await this.concatPosts(index);
    this.filteredPlanetList = planetList;
    return planetList;
  }

  async concatPosts(index) {
    for (let i = 1; i <= index; i++) {
      const planet = await this.getPostArray(i);
      this.planetList = this.planetList.concat(planet);
    }
    return this.planetList;
  }

  getPost(): Observable<any> {
    return this.http.get('https://swapi.co/api/planets/?format=json');
  }

  getNumberOfRequests() {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve) => {
      this.getPost().subscribe(planets => {
        this.planetCount = planets.count;
        resolve(Math.ceil(planets.count / 10));
      });
    });
  }

  getAllPosts(page: number): Observable<any> {
    return this.http.get('https://swapi.co/api/planets/?format=json&page=' + page);
  }

  getPostArray(page: number) {
    return new Promise((resolve) => {
      this.getAllPosts(page).subscribe(planets => {
        resolve(planets.results);
      });
    });
  }
}
