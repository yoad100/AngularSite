import Person from '../person';

export default class Employee extends Person {
  constructor(
    id: string,
    name: string,
    age: number,
    city: string,
    imgUrl: string,
    public jobTitle: string,
	public workHoursPerMonth: number,
    public paymentPerHour: number
  ) {
    super(id, name, age, city, imgUrl);
  }

  public paymentPerMonth = (): number => this.workHoursPerMonth * this.paymentPerHour;
}
