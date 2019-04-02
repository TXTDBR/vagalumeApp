import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RankingNacionalPage } from './ranking-nacional.page';

const routes: Routes = [
  {
    path: '',
    component: RankingNacionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RankingNacionalPage]
})
export class RankingNacionalPageModule {}
