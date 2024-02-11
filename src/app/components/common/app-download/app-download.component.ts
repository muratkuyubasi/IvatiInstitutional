import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-app-download',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './app-download.component.html',
    styleUrls: ['./app-download.component.scss']
})
export class AppDownloadComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {}

}