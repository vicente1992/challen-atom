import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksService } from './shared/services/tasks.service';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TasksCardComponent } from './components/tasks-card/tasks-card.component';


@NgModule({
  declarations: [
    TasksComponent,
    TasksCardComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ],
  providers: [TasksService]
})
export class TasksModule { }
