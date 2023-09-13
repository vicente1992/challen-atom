import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITask } from '@features/tasks/shared/models/task';
import { TasksService } from '@features/tasks/shared/services/tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  form!: FormGroup;
  tasks$!: Observable<ITask[]>;
  taskId!: string;
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.initForm();
    this.getTasks();
  }

  getTasks() {
    this.tasks$ = this.tasksService.getTasks();
  }

  onSubmit() {
    this.taskId ? this.update() : this.create();
  }

  create() {
    this.tasksService.createTaks(this.form.value)
      .subscribe(() => {
        this.form.reset();
        this.getTasks()
      })
  }
  update() {
    this.tasksService.updateTaks(this.taskId, this.form.value)
      .subscribe(() => {
        this.form.reset();
        this.getTasks()
      })
  }

  editTask(task: ITask) {
    this.taskId = task.id;
    this.form.patchValue(task);
  }


  private initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      completed: new FormControl(),
    })
  }
}
