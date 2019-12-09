import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationLengthComponent } from './pagination-length/pagination-length.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { LoaderComponent } from './loader/loader.component';
import { SinglePlanetComponent } from './single-planet/single-planet.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    PaginationComponent,
    PaginationLengthComponent,
    PageNotFoundComponent,
    PlanetListComponent,
    LoaderComponent,
    SinglePlanetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
