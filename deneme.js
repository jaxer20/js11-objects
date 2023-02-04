console.log("***********");
const people = {
    person1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    person2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    person3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    }
  }
//   maaşı 120000 den aşağı olanları yazdır
Object.values(people)
.filter(p=> console.log((p.salary)< 120000)) //false-true-true
//   maaşı 120000 den aşağı olanları döndür
const aa = Object.values(people)
.filter(p=> (p.salary) < 180000)
.map(p=> (p.salary))
console.log(aa);               //(3) ['140000', '110000', '90000']

// maaşı 135000 dan az olanların ad ve soyadlarını mevcu maaşları ile birlikte döndür
const bb = Object.values(people)
.filter(p=> (p.salary) < 135000)
.map(p=> (p.name) + " " + (p.surname) + ": " + (p.salary))
console.log(bb);

// X kuşağı dışındaki çalışanların tüm bilgilerini döndür
Object.values(people)
.filter(p=> (p.dob) = 1990)
.forEach(p=> console.log(p.surname))
