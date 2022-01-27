import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './Pages/Banner/Banner.component';
import { CharactersComponent } from './Pages/Characters/Characters.component';
import { ErroComponent } from './Pages/Erro/Erro.component';

const routes: Routes = [

  {
    path: '',
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
  {
    path: '**',
    component: ErroComponent,
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
