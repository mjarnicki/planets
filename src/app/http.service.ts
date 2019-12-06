import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  planetList = [];
  filteredPlanetList = [];
  planetCount = 1;

  async sendAllPosts(): Promise<any> {
    const index = await this.getNumberOfRequests();
    const planetList = await this.concatPosts(index);
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
