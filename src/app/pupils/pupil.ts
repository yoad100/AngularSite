import Person from '../person';
import Class from '../class';


export default class Pupil extends Person {
  constructor(
    id: string,
    name: string,
    age: number,
    city: string,
    imgUrl: string,
    public pupilClass: Class,
    public subjects: [{},{},{}] 
  ) {
    super(id, name, age, city, imgUrl);
  }

  public Avg = (): number => {
    let sum = 0;
    for (const subject of this.subjects) {
     
      sum += Number(subject['grade']);
    }
    console.log(sum / this.subjects.length);

    return sum / this.subjects.length;
  };
}
