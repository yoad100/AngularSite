import Teacher from './teachers/teacher';

export default class Class {
  public teachersInfo: Teacher | undefined;

  constructor(
    public id: string,
    public name: string,
    public numberOfStudents: number,
    public location: string
  ) {}

 
}
