import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './Pages/Banner/Banner.component';
import { CharactersComponent } from './Pages/Characters/Characters.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BannerComponent,
  },
  {
    path: 'characters',
      children: [
      {
        path: ':id',
        component: CharactersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
