import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    EntryRoutingModule
  ]
})
export class EntryModule { }
