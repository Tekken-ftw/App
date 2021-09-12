import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, of } from 'rxjs';

import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
characters = of(['gigas0', 'faggot', 'steve'])
searchControl = new FormControl();
$filteredCharacters = combineLatest([this.characters, this.searchControl.valueChanges.pipe(startWith(''))]).pipe(map(s => {
  const characters = s[0];
  const searchString = s[1];
  return searchString.length == 0 ? [] : characters.filter(s => s.toLowerCase().includes(searchString.toLowerCase())); 
  
}))
  constructor() { }

  ngOnInit(): void {
  }

}
