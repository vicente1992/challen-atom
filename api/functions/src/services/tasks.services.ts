import { db } from '../config/firebase';
import { Tasks } from '../interfaces/task';
import { WriteResult, DocumentData } from 'firebase-admin/firestore';


export class TasksService {

  async getAll(): Promise<Tasks[]> {
    const snapshot = await db.collection('tasks').get();
    return snapshot.docs.map((doc) => new Tasks({ id: doc.id, ...doc.data() }));
  }

  async create(data: Tasks): Promise<DocumentData> {
    return await db.collection('tasks').add({ ...data });
  }

  async update(TaskId: string, data: Tasks): Promise<DocumentData> {
    return await db.collection('tasks').doc(TaskId).update({ ...data });
  }

  async delete(TaskId: string): Promise<WriteResult> {
    return await db.collection('tasks').doc(TaskId).delete();
  }

}

export const tasksService = new TasksService();