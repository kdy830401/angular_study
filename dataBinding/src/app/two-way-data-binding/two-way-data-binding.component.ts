import { Component } from "@angular/core";

@Component({
    selector: 'app-two-way-data-binding',
    template: `
        <br>
        <h2>two-way-data-binding works!</h2>
        <input type="text" [(ngModel)]="name">
        <p>name: {{ name }}</p>
        <input type="text" [value]="name2" (input)="name2=$any($event.target).value">
        <p>name2: {{ name2 }}</p>
        <input [ngModel]="name3" (ngModelChange)="name3=$event">
        <p>name3: {{ name3 }}</p>


    
    `    
})
export class TwoWayDataBindingComponent {
    name = '';
    name2 = '';
    name3 = '';
}