 //? nested
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
    },
    person4: "JS",
  }
  
  //! ASSIGMENT
  //? person2'nin adini ve maasini yazdiriniz.
  // console.log(people)
  // console.log(people.person2.name)
  // console.log(people.person2.salary)
  
  console.log(people.person2.name);
  console.log(people.person2.salary);
  //? people objesindeki tum salary 'leri yazdirin (Dongu kullanilmal

  for(let p in people){
  console.log(people[p]);
  console.log(people[p].name);
  console.log(people[p].salary);
}
    // FOR OF
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

for (let a of Object.keys(people)){
  console.log(a);
}
 
for (let a of Object.values(people)){
  console.log(a);
}

for (let a of Object.entries (people)){
  console.log(a);
}

for (let [x,y] of Object.entries (people)){
  console.log(x,y);
}

// ARRAY METODU İLE OBCET LERE ERİŞME
Object.keys(people).forEach( p => console.log(p));
console.log("***********");

Object.values(people).forEach( p => console.log(p.name));
console.log("***********");

// job değeri developer olanları yazdır
const devs = Object.values(people).filter( p => (p.job) === "developer");
console.log(devs);
console.log("***********");

// job değeri developer olanların dob değerlerini yazdır

Object.values(people)
.filter( p => p.job === "developer")
.forEach(p=> console.log(p.dob));
console.log("***********");
// job değeri developer olanların dob değerlerini döndür
const dobs = Object.values(people)
.filter( p => p.job === "developer")
.map(p=> p.dob);
console.log(dobs);

console.log("***********");

// JSON

const team = [
  { name: "Josh", surname: "Adams", job: "developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
] //* JSON

console.log(team[1]);

// örn:team dizisindeki job ları tek tek yazdırın
team.forEach(p=> console.log(p.job))

//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
const newAges = team.map(p=> p.age+1)
console.log(newAges); 

// /* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
// /* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
// // /* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız. 
// 
const teamFullName = team.map(p=> {
return{
  fullName: (p.name +" "+ p.surname).toUpperCase(),
  age: p.age+5
}
})
console.log(teamFullName);

const x = team.map(p=> ({
y: p.name.toLocaleUpperCase()+ " " + p.surname.toUpperCase(),
age: p.age + 5,
}))
console.log(x);

const z = team.map(p=> ({
    y: (p.name +" "+ p.surname).toUpperCase(),
    age: p.age+5,
  }))
  console.log(z);

  //* Ornek: teamFullName dizisindeki 30 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.
 const under30 = teamFullName
 .filter(p=> p.age<30)
 .map(p=> p.fullName)
 console.log(under30);

 //* Ornek6: ortalama yasi hesaplayiniz.
const avgAges= teamFullName
.reduce((a,b)=>a+b .age,0)/
teamFullName.length
console.log(avgAges);
