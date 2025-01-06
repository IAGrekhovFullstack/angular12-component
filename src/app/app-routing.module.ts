import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridTextPageComponent } from './page/grid-text-page/grid-text.page';
import { IconPageComponent } from './page/icon-page/icon.page';

const routes: Routes = [
  { path: 'grid-text', component: GridTextPageComponent },
  { path: 'icon', component: IconPageComponent },
  { path: '**', component: IconPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }