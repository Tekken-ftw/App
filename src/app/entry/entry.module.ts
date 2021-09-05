import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EntryRoutingModule
  ]
})
export class EntryModule { }
