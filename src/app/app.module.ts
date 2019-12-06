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
import { PlanetsComponent } from './planets/planets.component';
import { AppRoutingModule } from './app-routing.module';
import { DataBaseService } from './data-base.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    PaginationComponent,
    PaginationLengthComponent,
    PlanetsComponent,
    PageNotFoundComponent,
    PlanetDetailsComponent,
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
    DataBaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
