import { Component } from "@angular/core";

@Component({
    selector: 'app-attribute-binding',
    template: `
        <br>
        <h2>attribute-binding works!</h2>
        <!-- 프로퍼티 바인딩 -->
        <input id="user" type="text" [value]="name">
        <!-- 어트리뷰트 바인딩 -->
        <input id="user" type="text" [attr.value]="name">
        <br>
        <br>

        <table>
            <tr>
                <!-- colspan 프로퍼티는 존재하지 않는다. 그렇기 떄문에 어트리뷰트 바인딩을 사용한다. -->
                <td [attr.colspan]="length">A + B</td>
            </tr>
            <tr>
                <td>C</td><td>D</td>
            </tr>
        </table>
    `,
    styles:[`
        table, td {
            width: 200px;
            border: 1px solid black;
            text-align: center;
        }
    `]
})
export class AttributeBindingComponent {
    name = 'Daeyeol2';
    length = 2;
}