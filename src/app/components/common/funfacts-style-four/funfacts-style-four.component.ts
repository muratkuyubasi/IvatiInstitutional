import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';

@Component({
    selector: 'app-funfacts-style-four',
    standalone: true,
    imports: [CountUpModule, RouterLink],
    templateUrl: './funfacts-style-four.component.html',
    styleUrls: ['./funfacts-style-four.component.scss']
})
export class FunfactsStyleFourComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

}