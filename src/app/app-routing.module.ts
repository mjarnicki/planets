import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'planet',
    component: PlanetsComponent,
    children: [
      {
        path: ':name',
        component: PlanetDetailsComponent
      }
    ]
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
