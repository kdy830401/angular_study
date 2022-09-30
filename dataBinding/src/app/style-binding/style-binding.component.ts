import { Component } from "@angular/core";

@Component ({
    selector: 'app-style-binding',
    template: `
        <br>
        <h2>style-binding workds!</h2>
        <button class="btn"
            [style.background-color]="isActive ? '#4CAF50' : '#f44336'"
            [style.font-size.em]="isActive ? '1.2' : '1'"
            (click)="isActive=!isActive">Toggle</button>
    `,
    styles:[`
        .btn {
            background-color: #4CAF50;
            border: none;
            border-radius: 8px;
            color: white;
            padding: 10px;
            cursor: pointer;
            outline: none;
        }
    `]
})
export class StyleBindingComponent {
    isActive = false;
}