import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./entry/entry.module').then(m => m.EntryModule) }, { path: 'school', loadChildren: () => import('./school/school.module').then(m => m.SchoolModule) }, { path: 'character', loadChildren: () => import('./character/character.module').then(m => m.CharacterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
