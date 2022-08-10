"use strict";
console.group('1. Naudojant "getter" ir "setter" NESUTRUMPINTAS funkcijas:');
{
    console.groupCollapsed(`1.1. Sukurkite klasę Person, kuri turėtų privačias savybes:
      name: string,
      surname: string,
      items: Array<{title: string, price: number}>,
      age: number,
    Aprašykite konstruktorių kuris priimtų šiom savybėms skirtus parametrus ir nustatytų reikšmes naudojant "setter" funkcijas.
  `);
    class Person {
        static ONLY_LETTERS = /^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž]+$/;
        name;
        surname;
        items;
        age;
        constructor(name, surname, items, age) {
            this.setName(name);
            this.setSurname(surname);
            this.setItem(items);
            this.setAge(age);
        }
        setName(name) {
            if (name === '')
                throw new Error('Cannot be emtpy');
            if (name.length < 3)
                throw new Error('Need to be more than 3 letters');
            if (name.length > 9)
                throw new Error('Too many letters, slow down there cowboy');
            this.name = name;
        }
        setSurname(surname) {
            if (surname.length < 3)
                throw new Error('Needs not be more than 2');
            if (surname !== surname[0].toUpperCase() + surname.slice(1))
                throw new Error('Needs to be first letter UpperCase');
            if (!Person.ONLY_LETTERS.test(surname))
                throw new Error('Needs to be only letters');
            this.surname = surname;
        }
        setItem(items) {
            if (items.length < 1)
                throw new Error('Need items');
            const isTitleExisting = items.filter((x) => x.title === '');
            if (isTitleExisting.length)
                throw new Error('No title');
            const isPriceHigh = items.filter((x) => x.price < 15);
            if (isPriceHigh.length)
                throw new Error('Price is too small');
            this.items = JSON.parse(JSON.stringify(items));
        }
        setAge(age) {
            if (age < 0)
                throw new Error('Youre Not even alive, how are you even typing this?');
            if (age > 99)
                throw new Error('You are either one lucky person, or a cursed one to say the least');
            this.age = age;
        }
        getName() {
            return this.name;
        }
        getSurname() {
            return this.surname;
        }
        getItems() {
            return JSON.parse(JSON.stringify(this.items));
        }
        getAge() {
            return this.age;
        }
        getFullName() {
            return `${this.name} ${this.surname}`;
        }
        getTotalItemValue() {
            const allItems = this.getItems();
            const results = allItems.reduce((current, previous) => (current + previous.price), 0);
            return results;
        }
    }
    console.groupEnd();
    const person = new Person('Alius', 'Grigaliūnas', [
        { title: 'Laikrodis', price: 90 },
        { title: 'Kompiuteris', price: 1100 },
        { title: 'Telefonas', price: 150 }
    ], 23);
    console.log(`${person.getName()} ${person.getSurname()}`);
    console.groupCollapsed('1.2. Aprašykite kiekvienai savybei "getter" funkcijas');
    {
    }
    console.groupEnd();
    console.groupCollapsed('1.3. Sukurkite papildomą getterį "getFullname", kuris grąžintų pilną žmogaus vardą.');
    {
        console.log(person.getFullName());
    }
    console.groupEnd();
    console.groupCollapsed('1.4. Sukurkite papildomą getterį "getTotalItemValue", kuris grąžintų visų asmens daiktų kainų sumą');
    {
        console.log(person.getTotalItemValue());
    }
    console.groupEnd();
    console.groupCollapsed('1.5. setName "setter"yje aprašykite 3 savo sugalvotas validacijas');
    {
        try {
            const person1 = new Person('', '', [], 0);
            console.log(person1.getName());
        }
        catch (error) {
            console.log(error);
        }
        try {
            const person2 = new Person('la', '', [], 0);
            console.log(person2.getName());
        }
        catch (error) {
            console.log(error);
        }
        try {
            const person3 = new Person('Neprisikiškiakopusteliaujantysis', '', [], 0);
            console.log(person3.getName());
        }
        catch (error) {
            console.log(error);
        }
        try {
            const RightPerson = new Person('Sanyrual', 'Silevaš', [], 32);
            console.log(RightPerson.getName());
        }
        catch (error) {
            console.log(error);
        }
    }
    console.groupEnd();
    console.groupCollapsed('1.6. setSurname "setter"yje aprašykite 3 savo sugalvotas validacijas');
    {
        try {
            const person1 = new Person('romynas', '', [], 0);
            console.log(person1);
        }
        catch (error) {
            console.log(error);
        }
        try {
            const person2 = new Person('alius', 'laaaa', [], 0);
            console.log(person2);
        }
        catch (error) {
            console.log(error);
        }
        try {
            const person3 = new Person('opelis', '-**-*+5656', [], 0);
            console.log(person3);
        }
        catch (error) {
            console.log(error);
        }
        try {
            const RightPerson = new Person('Sadyvmir', 'Saksualdiš', [], 32);
            console.log(RightPerson.getSurname());
        }
        catch (error) {
            console.log(error);
        }
    }
    console.groupEnd();
    console.groupCollapsed('1.7. setAge "setter"yje aprašykite 2 savo sugalvotas validacijas');
    {
        try {
            const person2 = new Person('Faustas', 'Yesakaits', [], -15);
            console.log(person2.getAge());
        }
        catch (error) {
            console.log(error);
        }
        try {
            const person3 = new Person('Romanas', 'Gudatis', [], 120);
            console.log(person3.getAge());
        }
        catch (error) {
            console.log(error);
        }
        try {
            const RightPerson = new Person('Sanyrual', 'Silevaš', [], 32);
            console.log(RightPerson.getAge());
        }
        catch (error) {
            console.log(error);
        }
    }
    console.groupEnd();
    console.groupCollapsed('1.8. setItems "setter"yje aprašykite 3 savo sugalvotas validacijas KIEKVIENO priskiriamo masyvo "daiktams"');
    {
        try {
            const person2 = new Person('Faustas', 'Yesakaits', [{ title: 'asdasd', price: 5 }, { title: 'asdasda', price: 40 }], 26);
            console.log(person2.getItems());
        }
        catch (error) {
            console.log(error);
        }
        try {
            const person3 = new Person('Romanas', 'Gudatis', [], 52);
            console.log(person3.getItems());
        }
        catch (error) {
            console.log(error);
        }
        try {
            const RightPerson = new Person('Sanyrual', 'Silevaš', [{ title: 'Glasses', price: 50 }], 32);
            console.log(RightPerson.getItems());
        }
        catch (error) {
            console.log(error);
        }
    }
    console.groupEnd();
}
console.groupEnd();
console.group('2. Naudojant "get" ir "set" ES6 funkcijas:');
{
    class Person2 {
        static ONLY_LETTERS = /^[a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž]+$/;
        _name;
        _surname;
        _items;
        _age;
        constructor(name, surname, items, age) {
            this.name = name;
            this.surname = surname;
            this.items = items;
            this.age = age;
        }
        set name(val) {
            if (val === '')
                throw new Error('Cannot be emtpy');
            if (val.length < 3)
                throw new Error('Need to be more than 3 letters');
            if (val.length > 9)
                throw new Error('Too many letters, slow down there cowboy');
            this._name = val;
        }
        get name() {
            return this._name;
        }
        set surname(val) {
            if (val.length < 3)
                throw new Error('Needs not be more than 2');
            if (val !== val[0].toUpperCase() + val.slice(1))
                throw new Error('Needs to be first letter UpperCase');
            if (!Person2.ONLY_LETTERS.test(val))
                throw new Error('Needs to be only letters');
            this._surname = val;
        }
        get surname() {
            return this._surname;
        }
        set items(val) {
            this._items = JSON.parse(JSON.stringify(val));
        }
        get items() {
            return JSON.parse(JSON.stringify(this._items));
        }
        set age(val) {
            this._age = val;
        }
        get age() {
            return this._age;
        }
        get FullName() {
            return `${this._name} ${this._surname}`;
        }
        get totalItemValue() {
            return this.items.reduce((current, previous) => (current + previous.price), 0);
        }
    }
    const personSecond = new Person2('Alius', 'Grigaliūnas', [{ title: 'Photo', price: 5 }, { title: '', price: 20 }], 26);
    console.groupCollapsed(`2.1. Sukurkite klasę Person, kuri turėtų privačias savybes:
      name: string,
      surname: string,
      items: Array<{title: string, price: number}>,
      age: number,
    Aprašykite konstruktorių kuris priimtų šiom savybėms skirtus parametrus ir nustatytų reikšmes naudojant "setter" funkcijas.
  `);
    {
        console.log(`${personSecond.name} ${personSecond.surname} ${personSecond.age}`);
    }
    console.groupEnd();
    console.groupCollapsed('2.2. Aprašykite kiekvienai savybei ES6 "get" funkcijas');
    {
        console.log(personSecond.items);
    }
    console.groupEnd();
    console.groupCollapsed('2.3. Sukurkite papildomą getterį "fullname", kuris grąžintų pilną žmogaus vardą.');
    {
        console.log(personSecond.FullName);
    }
    console.groupEnd();
    console.groupCollapsed('2.4. Sukurkite papildomą getterį "totalItemValue", kuris grąžintų visų asmens daiktų kainų sumą');
    {
        console.log(personSecond.totalItemValue);
    }
    console.groupEnd();
    console.groupCollapsed('2.5. name "setter"yje aprašykite 3 savo sugalvotas validacijas');
    {
        try {
            const person1 = new Person2('', '', [], 0);
            console.log(person1.name);
        }
        catch (error) {
            console.log(error);
        }
        try {
            const person2 = new Person2('la', '', [], 0);
            console.log(person2.name);
        }
        catch (error) {
            console.log(error);
        }
        try {
            const person3 = new Person2('Neprisikiškiakopusteliaujantysis', '', [], 0);
            console.log(person3.name);
        }
        catch (error) {
            console.log(error);
        }
        try {
            const RightPerson = new Person2('Sanyrual', 'Silevaš', [], 32);
            console.log(RightPerson.name);
        }
        catch (error) {
            console.log(error);
        }
    }
    console.groupEnd();
    console.groupCollapsed('2.6. surname "setter"yje aprašykite 3 savo sugalvotas validacijas');
    {
        try {
            const person1 = new Person2('romynas', '', [], 0);
            console.log(person1);
        }
        catch (error) {
            console.log(error);
        }
        try {
            const person2 = new Person2('alius', 'laaaa', [], 0);
            console.log(person2);
        }
        catch (error) {
            console.log(error);
        }
        try {
            const person3 = new Person2('opelis', '-**-*+5656', [], 0);
            console.log(person3);
        }
        catch (error) {
            console.log(error);
        }
        try {
            const RightPerson = new Person2('Sadyvmir', 'Saksualdiš', [], 32);
            console.log(RightPerson.surname);
        }
        catch (error) {
            console.log(error);
        }
    }
    console.groupEnd();
    console.groupCollapsed('2.7. age "setter"yje aprašykite 2 savo sugalvotas validacijas');
    {
    }
    console.groupEnd();
    console.groupCollapsed('2.8. items "setter"yje aprašykite 3 savo sugalvotas validacijas KIEKVIENO priskiriamo masyvo "daiktams"');
    {
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=TS-SetterAndGetterClass.js.map