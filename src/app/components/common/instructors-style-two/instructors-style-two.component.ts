import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-instructors-style-two',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './instructors-style-two.component.html',
    styleUrls: ['./instructors-style-two.component.scss']
})
export class InstructorsStyleTwoComponent implements OnInit {

    isToggled = false;

    constructor(
        public themeService: ThemeCustomizerService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    ngOnInit(): void {}

}