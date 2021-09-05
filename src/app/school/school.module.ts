import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { LessonComponent } from './lesson/lesson.component';


@NgModule({
  declarations: [
    OverviewComponent,
    LessonComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule
  ]
})
export class SchoolModule { }
