import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '@features/tasks/shared/models/task';
import { TasksService } from '@features/tasks/shared/services/tasks.service';

@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.scss']
})
export class TasksCardComponent {
  @Input({ required: true }) task!: ITask;
  @Output() cbLoad = new EventEmitter();
  @Output() cbTask = new EventEmitter<ITask>();
  constructor(private tasksService: TasksService) { }

  deleteTask(id: string) {
    this.tasksService.deleteTask(id)
      .subscribe(() => this.cbLoad.emit())
  }

  editTask(task: ITask) {
    this.cbTask.emit(task)
  }

  completedAndPending(task: ITask) {
    task.completed = !task.completed;
    this.tasksService.updateTaks(task.id, task)
      .subscribe(() => this.cbLoad.emit())
  }
}
