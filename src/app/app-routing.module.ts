import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetListComponent } from './planet-list/planet-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetListComponent,
  },
  {
    path: ':name',
    component: PlanetsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
