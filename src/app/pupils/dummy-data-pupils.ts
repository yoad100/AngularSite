import { classOne, classTwo } from '../teachers/dummy-data-teachers';
import Pupil from './pupil';

export const PUPILS: Pupil[] = [
  new Pupil(
    '1215',
    'ראובן לוי',
    6,
    'יבנה',
    'https://image.shutterstock.com/image-photo/beautiful-teenager-black-shirt-on-260nw-663624424.jpg',
    classTwo,
    [
		{name:"מתמטיקה",grade:50},
		{name:"אומנות",grade:40},
		{name:"שירה",grade:60}
    ]
  ),
  new Pupil(
    '69547',
    'טלי מורנו',
    7,
    'פתח תקווה',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtDYhDJFLpCzQFloT0yGGJuPLmOSwV219yA&usqp=CAU',
    classOne,
    [
		{name:"ספרות",grade:71},
		{name:"מחשבים",grade:45},
		{name:"קישוט",grade:89}
    ]
  ),
  new Pupil(
    '5121',
    'מוטי קפח',
    7,
    'יבנה',
    'https://img.mako.co.il/2018/03/20/ariel_fox_mlanoar_i.jpg',
    classOne,
    [
		{name:"אנדרואיד",grade:40},
		{name:"פייתון",grade:21},
		{name:"ריאקט",grade:7}
    ]
  ),
  new Pupil(
    '200315',
    'וויקטוריה בקהאם',
    6,
    'אשדוד',
    'https://medias.atmag.co.il/www/uploads/2018/01/H-1-3-600x600.jpg',
    classTwo,
    [
		{name:"ספרות",grade:100},
		{name:"מחשבים",grade:100},
		{name:"קישוט",grade:100}
    ]
  ),
  new Pupil(
    '659854',
    'יצחק לנקרי',
    6,
    'ראש העין',
    'https://ashdod10.co.il/wp-content/uploads/2021/01/Screenshot_20210102-182651_WhatsApp.jpg',
    classTwo,
    [
		{name:"לשון",grade:0},
		{name:"פורטוגזית",grade:98},
		{name:"ספרדית",grade:0}
    ]
  ),
  new Pupil(
    '78945',
    'זוהר ארגוב',
    7,
    'אריאל',
    'https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_792,w_900/414606',
    classOne,
    [
		{name:"פיתוח קול",grade:100},
		{name:"תיאטרון",grade:100},
		{name:"קרימינולוגיה",grade:100}
    ]
  ),
  new Pupil(
    '6024154',
    'שחר נחום',
    6,
    'כפר סבא',
    'https://media.istockphoto.com/photos/headshot-of-a-teenage-boy-picture-id1158014305?k=6&m=1158014305&s=612x612&w=0&h=wJghV5wVzO8_88a808t7kVK2VBPp3TqEm6g2OYk19v4=',
    classTwo,
    [
		{name:"ספורט",grade:90},
		{name:"מחשבים",grade:100},
		{name:"עיצוב גבות",grade:85}
    ]
  ),
  new Pupil(
    '32684',
    'יחזקאל אספיר',
    8,
    'פתח תקווה',
    'https://www.motke.co.il/webfiles/fck/images/%D7%A8%D7%95%D7%9F%20%D7%93%D7%94%D7%9F-%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%90%D7%91%D7%99%D7%92%D7%99%D7%9C%20%D7%A2%D7%95%D7%96%D7%99.jpg',
    classOne,
    [
		{name:"ג'אווה",grade:100},
		{name:"בישול",grade:80},
		{name:"סטיילינג",grade:100}
    ]
  ),
];
