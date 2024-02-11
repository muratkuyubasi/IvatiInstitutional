import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';

@Component({
    selector: 'app-funfacts-style-three',
    standalone: true,
    imports: [CountUpModule, RouterLink],
    templateUrl: './funfacts-style-three.component.html',
    styleUrls: ['./funfacts-style-three.component.scss']
})
export class FunfactsStyleThreeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

}