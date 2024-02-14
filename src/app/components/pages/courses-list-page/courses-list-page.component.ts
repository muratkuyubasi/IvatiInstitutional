import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';
import { HeaderStyleThreeComponent } from "../../common/header-style-three/header-style-three.component";
import { HeaderStyleFiveComponent } from "../../common/header-style-five/header-style-five.component";

@Component({
    selector: 'app-courses-list-page',
    standalone: true,
    templateUrl: './courses-list-page.component.html',
    styleUrls: ['./courses-list-page.component.scss'],
    imports: [HeaderStyleTwoComponent, RouterLink, HeaderStyleThreeComponent, HeaderStyleFiveComponent]
})
export class CoursesListPageComponent implements OnInit {

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