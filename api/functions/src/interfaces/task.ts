
export class Tasks {
  id!: string;
  name!: string;
  description!: string;
  status!: string;

  constructor(data: Partial<Tasks>) {
    Object.assign(this, data)

  }
}