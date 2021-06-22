import Person from '../person';
import Class from '../class';

export default class Teacher extends Person {
  constructor(
    id: string,
    name: string,
    age: number,
    city: string,
    imgUrl: string,
    public subjects: string[],
    public classes: Class[],
    public seniority: number,
    public workHoursPerMonth: number,
    public paymentPerHour: number
  ) {
    super(id, name, age, city, imgUrl);
  }

  
}

