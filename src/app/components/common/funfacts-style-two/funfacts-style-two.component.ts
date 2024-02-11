import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { CountUpModule } from 'ngx-countup';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-funfacts-style-two',
    standalone: true,
    imports: [CountUpModule, RouterLink],
    templateUrl: './funfacts-style-two.component.html',
    styleUrls: ['./funfacts-style-two.component.scss']
})
export class FunfactsStyleTwoComponent implements OnInit {

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