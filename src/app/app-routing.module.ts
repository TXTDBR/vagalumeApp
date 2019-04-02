import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '',  redirectTo: 'home',   pathMatch: 'full'  },
  { path: 'home',   loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/:id', loadChildren: './pages/musica-detalhe/musica-detalhe.module#MusicaDetalhePageModule' },
  { path: 'ranking-nacional', loadChildren: './pages/ranking-nacional/ranking-nacional.module#RankingNacionalPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
