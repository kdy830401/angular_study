import { Component } from "@angular/core";

@Component({
    selector: 'app-hello',
    // templateUrl: './hello.component.html',
    template : `
    <h2>안녕하세요 {{name}}</h2>
    <input type="text" placeholder="이름을 입력하세요" #inputYourName>
    <button (click)="setName(inputYourName.value)">등록</button>
    ` ,
    styleUrls: ['./hello.component.css']
})
export class HelloComponent {
    name!: string;

    setName(name: string) {
        this.name = name;
    }

}