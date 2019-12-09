import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { SinglePlanetComponent } from './single-planet/single-planet.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetListComponent,
  },
  {
    path: ':name',
    component: SinglePlanetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
