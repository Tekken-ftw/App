import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './pages/character/character.component';
import { MovesComponent } from './pages/moves/moves.component';
import { MatchupGuideComponent } from './pages/matchup-guide/matchup-guide.component';


@NgModule({
  declarations: [
    CharacterComponent,
    MovesComponent,
    MatchupGuideComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
