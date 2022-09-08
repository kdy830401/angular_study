import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
        <p>name2: {{ name2}}</p>
        <p>age: {{ age }}</p>
        <p>admin: {{ admin }}</p>
        <p>address: {{ address.city }} {{ address.country }}</p>
        <p>gender: {{ gender }}</p>
        <p>sayHi(): {{ sayHi()}}</p>
        <p>age * 10: {{ age * 10}}</p>
        <p>age > 10: {{ age > 10 }}</p>
        <p>'string': {{ 'string' }}</p>
      `
})
export class AppComponent {
  // title을 'Hello Angular'로 수정
  title = 'Hello Angular';
  name2 = 'Angular';
  age = 20;
  admin = true;
  address = {
      city: 'Seoul',
      country: 'Korea'
  };
  gender: any;


  sayHi() {
      return `Hi, my name is ${ this.name2 }.`;
  }
}