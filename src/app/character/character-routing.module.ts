import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';
import { MatchupGuideComponent } from './pages/matchup-guide/matchup-guide.component';
import { MovesComponent } from './pages/moves/moves.component';

const routes: Routes = [{ path: 'character:id', component: CharacterComponent }, {path: 'character:id/moves', component: MovesComponent}, {path: 'character:id/matchup', component:MatchupGuideComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
