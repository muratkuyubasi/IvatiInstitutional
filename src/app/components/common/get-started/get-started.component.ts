import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-get-started',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './get-started.component.html',
    styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

}