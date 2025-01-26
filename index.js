//? Studenti [reden broj, ime, prezime, prosek, grad]
//? dodavanje na student vo fajlot
//? Brishenje na student od fajlot
//? menuvanje na podatoci na student od fajlot
//? chitanje na site studenti od fajlot

//? - Treba da dodademe student vo fajlot
//? 1. Da ja vhitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza / objekt | JSON.parse
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
//? 4. Nizada od js niza/objekt treba da bide konvertirana vo tekst | JSON.strinfify
//? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile

//? - Imeto na studentot treba da bide smenet od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodveteniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da bide zachuvan vo fajlot | fs.writeFile

//? - Treba da se izbrise student od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite samo soodvetniot clen | Array.filter
//? 4. Nizata od js niza/objekt treba da bide konertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da bide zachuvan vo fajlot | fs.writeFile

const readWrite = require("./readWrite");

//? dodavanje na student vo fajlot
(async () => {
  try {
    const studentiData = await readWrite.fileRead("studenti.json");
    const studenti = JSON.parse(studentiData);
    studenti.forEach((student) => {
      if (student.ime === "Jana" && student.grad === "Tetovo") {
        studenti.splice(studenti.indexOf(student), 1);
      }
    });
// Prave problem, vo json fajlot go dodava studentot ama ne ja trga zagradata za niza ] i potoa pak dodava i javuva greska vo json fajlot
    console.log(studenti);
    await readWrite.fileWrite("studenti.json", JSON.stringify(studenti));
  } catch (err) {
    console.log(err);
  }
})();


//? menuvanje na podatoci na student od fajlot
(async () => {
  try {
    const studentiData = await readWrite.fileRead("studenti.json");
    const studenti = JSON.parse(studentiData);
    studenti.forEach((student) => {
      if (student.ime === "Nikola") {
        student.ime = "Nikolaj";
      }
    });
    console.log(studenti);
    await readWrite.fileWrite("studenti.json", JSON.stringify(studenti));
  } catch (err) {
    console.log(err);
  }
})();

//? chitanje na site studenti od fajlot
console.log("Krajna niza");
(async () => {
  try {
 const studentiData = await readWrite.fileRead("studenti.json")
const modificiraniStudenti = JSON.parse(studentiData)
console.log(modificiraniStudenti)
  }
  catch(err){
    console.log(err)
  }
})()
