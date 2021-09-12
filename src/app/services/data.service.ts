import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as data from './frame-data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  $basedata:BehaviorSubject<any> = new BehaviorSubject(data);
  constructor() { }
}
