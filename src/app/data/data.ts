export const students  = 
[
    {
      "id": 0,
      "age": 38,
      "eyeColor": "brown",
      "name": "Hester Dale",
      "phone": "+01 (861) 515-3071",
      "address": "184 Baltic Street, Trexlertown, Georgia, 4988",
      "dob": "Sat Apr 04 1992 09:40:04 GMT+0200 (Eastern European Standard Time)",
      "faculty": "IT Faculty",
      "image": ""
    },
    {
      "id": 10,
      "age": 25,
      "eyeColor": "green",
      "name": "Cantu Briggs",
      "phone": "+01 (922) 500-3295",
      "address": "599 Herkimer Court, Craig, New Hampshire, 3003",
      "dob": "Sat Mar 24 2018 00:18:04 GMT+0200 (Eastern European Standard Time)",
      "faculty": "CS Faculty",
      "image": "../assets/images/student.jpg"
    },
    {
      "id": 20,
      "age": 36,
      "eyeColor": "blue",
      "name": "Lopez Burris",
      "phone": "+01 (850) 515-3226",
      "address": "621 India Street, Norris, Nevada, 3216",
      "dob": "Mon Jun 30 1975 21:41:53 GMT+0300 (Eastern European Summer Time)",
      "faculty": "IT Faculty",
      "image": "../assets/images/student.jpg"
    },
    {
      "id": 30,
      "age": 25,
      "eyeColor": "blue",
      "name": "Wilkins Caldwell",
      "phone": "+01 (854) 481-3674",
      "address": "626 Homecrest Avenue, Turah, Wisconsin, 8785",
      "dob": "Thu Jun 24 1982 12:51:59 GMT+0200 (Eastern European Standard Time)",
      "faculty": "IT Faculty",
      "image": "../assets/images/student.jpg"
    },
    {
      "id": 40,
      "age": 23,
      "eyeColor": "blue",
      "name": "Laura Bray",
      "phone": "+01 (857) 484-2352",
      "address": "913 Dodworth Street, Enetai, Northern Mariana Islands, 9079",
      "dob": "Thu Sep 19 1996 01:39:02 GMT+0300 (Eastern European Summer Time)",
      "faculty": "CS Faculty",
      "image": "../assets/images/student.jpg"
    },
    {
      "id": 50,
      "age": 26,
      "eyeColor": "brown",
      "name": "Frank Mcbride",
      "phone": "+01 (949) 590-3807",
      "address": "258 Woods Place, Darrtown, Illinois, 8990",
      "dob": "Mon Jan 05 2004 11:37:59 GMT+0200 (Eastern European Standard Time)",
      "faculty": "CS Faculty",
      "image": "../assets/images/student.jpg"
    },
    {
      "id": 60,
      "age": 26,
      "eyeColor": "blue",
      "name": "Krista Mercer",
      "phone": "+01 (941) 465-3509",
      "address": "265 Frank Court, Bellamy, Florida, 6347",
      "dob": "Sat Aug 08 1981 16:25:48 GMT+0300 (Eastern European Summer Time)",
      "faculty": "CS Faculty",
      "image": "../assets/images/student.jpg"
    },
    {
      "id": 70,
      "age": 36,
      "eyeColor": "blue",
      "name": "Keller Cruz",
      "phone": "+01 (876) 566-2037",
      "address": "521 Opal Court, Dubois, Idaho, 1574",
      "dob": "Mon Dec 29 1980 00:25:25 GMT+0200 (Eastern European Standard Time)",
      "faculty": "IS Faculty",
      "image": "../assets/images/student.jpg"
    },
    {
      "id": 80,
      "age": 29,
      "eyeColor": "brown",
      "name": "Agnes Mckinney",
      "phone": "+01 (881) 531-3576",
      "address": "454 Beaver Street, Taft, Pennsylvania, 2180",
      "dob": "Thu May 15 2014 13:36:18 GMT+0200 (Eastern European Standard Time)",
      "faculty": "IS Faculty",
      "image": "../assets/images/student.jpg"
    },
    {
      "id": 90,
      "age": 22,
      "eyeColor": "blue",
      "name": "Robin Pickett",
      "phone": "+01 (964) 446-2861",
      "address": "101 Clymer Street, Farmington, Guam, 7648",
      "dob": "Wed Oct 12 2016 10:54:28 GMT+0200 (Eastern European Standard Time)",
      "faculty": "IT Faculty",
      "image": "../assets/images/student.jpg"
    },
    {
      "id": 100,
      "age": 23,
      "eyeColor": "blue",
      "name": "Laverne Mcconnell",
      "phone": "+01 (835) 529-3267",
      "address": "359 Court Square, Lafferty, Puerto Rico, 3927",
      "dob": "Sat Jun 24 1989 22:23:07 GMT+0300 (Eastern European Summer Time)",
      "faculty": "IS Faculty",
      "image": "../assets/images/student.jpg"
    },
    {
      "id": 110,
      "age": 24,
      "eyeColor": "green",
      "name": "Rivera Holman",
      "phone": "+01 (875) 548-2022",
      "address": "952 Garland Court, Leroy, New Jersey, 8070",
      "dob": "Tue Sep 17 1974 15:48:30 GMT+0300 (Eastern European Summer Time)",
      "faculty": "CS Faculty",
      "image": "../assets/images/student.jpg"
    }
  ];

  export const faculties = [ 
    {
      "id" : 1,
      "name" :"CS Faculty"
    },
    {
      "id" : 2,
      "name" :"IS Faculty"
    },
    {
      "id" : 3,
      "name" :"IT Faculty"
    }
  ]

     export class Student{
        id:  number
        age: number
        eyeColor: string
        name: string
        phone: string
        address: string
        dob : Date
        image : string
        faculty : string
     }

