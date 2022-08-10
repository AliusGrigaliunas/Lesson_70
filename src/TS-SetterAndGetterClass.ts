/* eslint-disable no-empty */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:
  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.
  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?
  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.
    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.
  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/

// 75min
console.group('1. Naudojant "getter" ir "setter" NESUTRUMPINTAS funkcijas:');
{
  // 15min
  console.groupCollapsed(`1.1. Sukurkite klasę Person, kuri turėtų privačias savybes:
      name: string,
      surname: string,
      items: Array<{title: string, price: number}>,
      age: number,
    Aprašykite konstruktorių kuris priimtų šiom savybėms skirtus parametrus ir nustatytų reikšmes naudojant "setter" funkcijas.
  `);

  type Item = {
    title: string,
    price: number
  };

  class Person {
    private static readonly ONLY_LETTERS = /^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž]+$/;

    private name!: string;

    private surname!: string;

    private items!: Item[];

    private age!: number;

    constructor(
      name: string,
      surname: string,
      items: Array<{ title: string, price: number }>,
      age: number,
    ) {
      this.setName(name);
      this.setSurname(surname);
      this.setItem(items);
      this.setAge(age);
    }

    public setName(name: string): void {
      if (name === '') throw new Error('Cannot be emtpy');
      if (name.length < 3) throw new Error('Need to be more than 3 letters');
      if (name.length > 9) throw new Error('Too many letters, slow down there cowboy');
      this.name = name;
    }

    public setSurname(surname: string): void {
      if (surname.length < 3) throw new Error('Needs not be more than 2');
      if (surname !== surname[0].toUpperCase() + surname.slice(1)) throw new Error('Needs to be first letter UpperCase');
      if (!Person.ONLY_LETTERS.test(surname)) throw new Error('Needs to be only letters');

      this.surname = surname;
    }

    public setItem(items: Item[]):void {
      if (items.length < 1) throw new Error('Need items');

      const isTitleExisting = items.filter((x): boolean => x.title === '');

      if (isTitleExisting.length) throw new Error('No title');

      const isPriceHigh = items.filter((x) => x.price < 15);

      if (isPriceHigh.length) throw new Error('Price is too small');

      this.items = JSON.parse(JSON.stringify(items));
    }

    public setAge(age: number): void {
      if (age < 0) throw new Error('Youre Not even alive, how are you even typing this?');
      if (age > 99) throw new Error('You are either one lucky person, or a cursed one to say the least');
      this.age = age;
    }

    public getName() {
      return this.name;
    }

    public getSurname() {
      return this.surname;
    }

    public getItems() {
      return JSON.parse(JSON.stringify(this.items));
    }

    public getAge() {
      return this.age;
    }

    public getFullName() {
      return `${this.name} ${this.surname}`;
    }

    public getTotalItemValue() {
      const allItems = this.getItems();
      const results = allItems.reduce((
        current: number,
        previous: Item,
      ) => (current + previous.price), 0);
      return results;
    }
  }
  console.groupEnd();

  const person = new Person('Alius', 'Grigaliūnas', [
    { title: 'Laikrodis', price: 90 },
    { title: 'Kompiuteris', price: 1100 },
    { title: 'Telefonas', price: 150 }], 23);

  console.log(`${person.getName()} ${person.getSurname()}`);

  // 5min
  console.groupCollapsed('1.2. Aprašykite kiekvienai savybei "getter" funkcijas');
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('1.3. Sukurkite papildomą getterį "getFullname", kuris grąžintų pilną žmogaus vardą.');
  {
    console.log(person.getFullName());
  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('1.4. Sukurkite papildomą getterį "getTotalItemValue", kuris grąžintų visų asmens daiktų kainų sumą');
  {
    console.log(person.getTotalItemValue());
  }
  console.groupEnd();

  // 15min
  console.groupCollapsed('1.5. setName "setter"yje aprašykite 3 savo sugalvotas validacijas');
  {
    try {
      const person1 = new Person('', '', [], 0);
      console.log(person1.getName());
    } catch (error) { console.log(error); }
    try {
      const person2 = new Person('la', '', [], 0);
      console.log(person2.getName());
    } catch (error) { console.log(error); }
    try {
      const person3 = new Person('Neprisikiškiakopusteliaujantysis', '', [], 0);
      console.log(person3.getName());
    } catch (error) { console.log(error); }
    try {
      const RightPerson = new Person('Sanyrual', 'Silevaš', [], 32);
      console.log(RightPerson.getName());
    } catch (error) { console.log(error); }
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('1.6. setSurname "setter"yje aprašykite 3 savo sugalvotas validacijas');
  {
    try {
      const person1 = new Person('romynas', '', [], 0);
      console.log(person1);
    } catch (error) { console.log(error); }
    try {
      const person2 = new Person('alius', 'laaaa', [], 0);
      console.log(person2);
    } catch (error) { console.log(error); }
    try {
      const person3 = new Person('opelis', '-**-*+5656', [], 0);
      console.log(person3);
    } catch (error) { console.log(error); }
    try {
      const RightPerson = new Person('Sadyvmir', 'Saksualdiš', [], 32);
      console.log(RightPerson.getSurname());
    } catch (error) { console.log(error); }
  }
  console.groupEnd();

  // 15min
  console.groupCollapsed('1.7. setAge "setter"yje aprašykite 2 savo sugalvotas validacijas');
  {
    try {
      const person2 = new Person('Faustas', 'Yesakaits', [], -15);
      console.log(person2.getAge());
    } catch (error) { console.log(error); }
    try {
      const person3 = new Person('Romanas', 'Gudatis', [], 120);
      console.log(person3.getAge());
    } catch (error) { console.log(error); }
    try {
      const RightPerson = new Person('Sanyrual', 'Silevaš', [], 32);
      console.log(RightPerson.getAge());
    } catch (error) { console.log(error); }
  }
  console.groupEnd();

  // 20min
  console.groupCollapsed('1.8. setItems "setter"yje aprašykite 3 savo sugalvotas validacijas KIEKVIENO priskiriamo masyvo "daiktams"');
  {
    try {
      const person2 = new Person('Faustas', 'Yesakaits', [{ title: 'asdasd', price: 5 }, { title: 'asdasda', price: 40 }], 26);
      // console.log(person2.getItems());
    } catch (error) { console.log(error); }
    try {
      const person3 = new Person('Romanas', 'Gudatis', [], 52);
      // console.log(person3.getItems());
    } catch (error) { console.log(error); }
    try {
      const RightPerson = new Person('Sanyrual', 'Silevaš', [{ title: 'Glasses', price: 50 }], 32);
      // console.log(RightPerson.getItems());
    } catch (error) { console.log(error); }
  }
  console.groupEnd();
}
console.groupEnd();

// PASIKOPIJUOKITE VISĄ PIRMĄ UŽDUOTĮ IR PAKEISTIKTE KODĄ NAUDOJANT NAUJĄ "get" ir "set" SINTAKSĘ
// 55min
console.group('2. Naudojant "get" ir "set" ES6 funkcijas:');
{
  // class Person {
  // }

  // const person = new Person();

  // 10min
  console.groupCollapsed(`2.1. Sukurkite klasę Person, kuri turėtų privačias savybes:
      name: string,
      surname: string,
      items: Array<{title: string, price: number}>,
      age: number,
    Aprašykite konstruktorių kuris priimtų šiom savybėms skirtus parametrus ir nustatytų reikšmes naudojant "setter" funkcijas.
  `);
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('2.2. Aprašykite kiekvienai savybei ES6 "get" funkcijas');
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('2.3. Sukurkite papildomą getterį "fullname", kuris grąžintų pilną žmogaus vardą.');
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('2.4. Sukurkite papildomą getterį "totalItemValue", kuris grąžintų visų asmens daiktų kainų sumą');
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('2.5. name "setter"yje aprašykite 3 savo sugalvotas validacijas');
  {
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('2.6. surname "setter"yje aprašykite 3 savo sugalvotas validacijas');
  {
  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('2.7. age "setter"yje aprašykite 2 savo sugalvotas validacijas');
  {
  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('2.8. items "setter"yje aprašykite 3 savo sugalvotas validacijas KIEKVIENO priskiriamo masyvo "daiktams"');
  {
  }
  console.groupEnd();
}
console.groupEnd();
