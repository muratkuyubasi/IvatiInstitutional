import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';
import { HeaderStyleFiveComponent } from "../../common/header-style-five/header-style-five.component";

@Component({
    selector: 'app-courses-details-page',
    standalone: true,
    templateUrl: './courses-details-page.component.html',
    styleUrls: ['./courses-details-page.component.scss'],
    imports: [HeaderStyleTwoComponent, RouterLink, HeaderStyleFiveComponent]
})
export class CoursesDetailsPageComponent implements OnInit {

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