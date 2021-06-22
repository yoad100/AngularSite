import Class from '../class';
import Teacher from './teacher';

export const classOne = new Class('1', 'ה7', 54, 'קומה 3 כיתה 2');
export const classTwo = new Class('2', 'ג2', 21, 'קומה 3 כיתה 11');

export const TEACHERS: Teacher[] = [
  new Teacher(
    '15648',
    'רעות צנעני',
    37,
    'באר שבע',
    'https://img.mako.co.il/2020/01/01/957869pic_Orig_i.jpg',
    ['עברית', 'מחנכת כיתה ג2'],
    [classOne],
    10,
    40,
    50
  ),
  new Teacher(
    '513624',
    'משה סלימאן',
    59,
    'פתח תקווה',
    'https://medias.timeout.co.il/www/uploads/2019/07/Img26261-750x500-1563362829.jpg',
    ['מתמטיקה', 'פיסיקה'],
    [classOne],
    20,
    60,
    65
  ),
  new Teacher(
    '23106',
    'נועם טרה',
    37,
    'אשדוד',
    'https://www.emeknews.co.il/wp-content/uploads/2021/01/first-1-848x636.jpg',
    ['תכנות'],
    [classOne, classTwo],
    12,
    100,
    64
  ),
  new Teacher(
    '023014',
    'יחזקאל מרטיני',
    30,
    'הרצליה',
    'https://lifehacks.co.il/wp-content/uploads/2018/05/%D7%90%D7%A0%D7%A9%D7%99%D7%9D-%D7%9E%D7%A6%D7%9C%D7%99%D7%97%D7%99%D7%9D.jpg',
    ['תכנות', 'רשתות'],
    [classOne],
    8,
    110,
    70
  ),
  new Teacher(
    '02365',
    'גבריאל שלום',
    42,
    'יבנה',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqHvDK-9Qix1aF3GUFJamWSYJMzpeHFz9Ww&usqp=CAU',
    ['שפת סי', 'ארדווינו'],
    [classOne, classTwo],
    15,
    90,
    80
  ),
  new Teacher(
    '30218745',
    'תקווה אזולאי',
    70,
    'תל אביב',
    'https://lh3.googleusercontent.com/proxy/P_o-W0esIBiC-3nQiXISdy_Qucq6oFx7ReTk8XGl2Ea9_PwWteNGonCN13GmiXOHbDe_oZQe9D9rJB1VemBdZLMO4Y_7DKfkiJ5jjU1QQKK5AD3u',
    ['משחק', 'כישורי חיים', 'מחכנת כיתה ה7'],
    [classTwo],
    40,
    50,
    150
  ),
];

classOne.teachersInfo = TEACHERS[0];
classTwo.teachersInfo = TEACHERS[TEACHERS.length - 1];
