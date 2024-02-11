import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';

@Component({
    selector: 'app-funfacts',
    standalone: true,
    imports: [CountUpModule, RouterLink],
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

}