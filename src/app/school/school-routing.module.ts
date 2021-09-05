import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './lesson/lesson.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [{ path: '', component: OverviewComponent }, {path: 'lesson/id', component: LessonComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
