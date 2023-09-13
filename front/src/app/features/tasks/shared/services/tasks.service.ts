import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment.development';
import { ITask } from '../models/task';

@Injectable()
export class TasksService {
  private http = inject(HttpClient);
  private url = environment.apiUrl;

  public createTaks(body: ITask) {
    return this.http.post<ITask>(`${this.url}/tasks`, body);
  }

  public getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${this.url}/tasks`);
  }

  public updateTaks(id: string, body: ITask) {
    return this.http.put<ITask>(`${this.url}/tasks/${id}`, body);
  }

  public deleteTask(id: string) {
    return this.http.delete(`${this.url}/tasks/${id}`);
  }
}
